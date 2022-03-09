
import React, { FC, useEffect, useState } from 'react';
import "./rating.scss";
import Star from './Star';

export enum RatingSizeType {
    Medium,
    Small,
    Large,
}

interface IRatingProps {
    disabled?: boolean,
    label?: string,
    value?: number,
    size?: RatingSizeType,
    count?: number,
    onChange?: (currValue?: number) => void;
}

export default function Rating({ disabled = false, label, value = 4, size = RatingSizeType.Medium, count = 5, onChange }: IRatingProps) {
    const [starsArray,setStarsArray]=useState<number[]>([]);
    const [currentValue,setCurrentValue] = useState<number>(value);

    useEffect(()=>{
        changeStarArray(currentValue);
    },[count,disabled,currentValue]);

    useEffect(()=>{
        setCurrentValue(value);
    },[value])


    const changeStarArray = (currValue:number)=>{
        const newStarArr:number[] = [];
        for(let i=1;i<=count;i++){
            if(i<=currValue){
                newStarArr.push(1);
            }else{
                newStarArr.push(Math.max(currValue-i+1,0))
            }
        }
        setStarsArray(newStarArr);
    }

    const mouseEnterEvent = (index:number)=>{
        changeStarArray(index);
    }
    const mouseLeaveEvent = ()=>{
        changeStarArray(currentValue);
    }
    const mouseClickEvent = (index:number)=>{
        setCurrentValue(index);
        onChange?.(index);
    }

    return <div className='Rating-Component medium'>
        <div className='star-line'>
            {
                starsArray.map((item,index)=> <Star key={index} disabled={disabled} value={item} index={index} mouseEnterEvent={mouseEnterEvent} mouseLeaveEvent={mouseLeaveEvent} mouseClickEvent={mouseClickEvent} />)
            }
        </div>

    </div>
}