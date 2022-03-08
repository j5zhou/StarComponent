import { RatingSizeType } from "./Rating";
import React, { FC, useEffect, useState } from 'react';
import "./rating.scss";

interface IStarProps{
    disabled?: boolean,
    value?: number,
    size?: RatingSizeType,
    index:number,
    mouseEnterEvent:(ind:number) => void,
    mouseLeaveEvent:() => void,
    onChange?: (e?: React.MouseEvent) => void;
}
export default function Star({ disabled = false, value = 0, size = RatingSizeType.Medium,index, onChange,mouseEnterEvent,mouseLeaveEvent }: IStarProps){
    console.log(index,value);
    const activeClassOptions:string[] = [];
    const defaultClassOptions:string[] = [];
    switch(size){
        case RatingSizeType.Medium:
            activeClassOptions.push("medium");
            defaultClassOptions.push("medium");
            break;
    }

    const percentage:string = value*100+"%";

    return <div className='star-item' onMouseEnter={()=>mouseEnterEvent(index+1)} onMouseLeave={()=>mouseLeaveEvent()}>
    <div className={'rating-star '+activeClassOptions.join(" ")}>
        <label className='star-wrapper top' style={{width:percentage}}>
            <svg viewBox="0 0 25 30" className={'star-content fill '+activeClassOptions.join(" ")}>
                <polygon points="12.5,1.25 5,24.75 23.75,9.75 1.25,9.75 20,24.75"/>
            </svg>
        </label>
        <label className='star-wrapper'>
            <svg viewBox="0 0 25 30" className={'star-content '+defaultClassOptions.join(" ") }>
                <polygon points="12.5,1.25 5,24.75 23.75,9.75 1.25,9.75 20,24.75" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </label>
    </div>
    </div>
}