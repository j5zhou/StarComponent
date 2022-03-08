
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
    onChange?: (e?: React.MouseEvent) => void;
}

export default function Rating({ disabled = false, label, value = 3.5, size = RatingSizeType.Medium, count = 5, onChange }: IRatingProps) {
    const [starsArray,setStarsArray]=useState<number[]>([]);
    useEffect(()=>{
        changeStarArray(value);
    },[count,value,disabled]);
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
        console.log(index);
        changeStarArray(index);
    }
    const mouseLeaveEvent = ()=>{
        changeStarArray(value);
    }

    return <div className='Rating-Component medium'>
        <div className='star-line'>
            {
                starsArray.map((item,index)=> <Star key={index} value={item} index={index} mouseEnterEvent={mouseEnterEvent} mouseLeaveEvent={mouseLeaveEvent} />)
            }
        </div>

    </div>
}