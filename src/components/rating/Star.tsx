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
    mouseClickEvent:(ind:number) => void,
    onChange?: (e?: React.MouseEvent) => void;
}

export default function Star({ disabled = false, value = 0.5, size = RatingSizeType.Medium,index, onChange,mouseEnterEvent,mouseLeaveEvent,mouseClickEvent }: IStarProps){
    const activeLeftClassOptions:string[] = [];
    const activeRightClassOptions:string[] = [];
    const defaultClassOptions:string[] = [];
    let starPoints:string = "";
    switch(size){
        case RatingSizeType.Medium:
            activeLeftClassOptions.push("medium");
            activeRightClassOptions.push("medium");
            defaultClassOptions.push("medium");
            starPoints = "12.5,1.25 5,24.75 23.75,9.75 1.25,9.75 20,24.75";
            break;
    }
    switch(value){
        case 0.5:
            activeLeftClassOptions.push("fill");
            break;
        case 1:
            activeLeftClassOptions.push("fill");
            activeRightClassOptions.push("fill");
            break;
    }
    if(disabled){
        activeLeftClassOptions.push("disabled");
        activeRightClassOptions.push("disabled");
        defaultClassOptions.push("disabled");
    }


    return <div className='star-item' onMouseLeave={()=>!disabled && mouseLeaveEvent()}>
    <div className={'rating-star '+activeLeftClassOptions.join(" ")}>
        <label className='star-wrapper top-left' onMouseEnter={()=>!disabled && mouseEnterEvent(index+0.5)} onClick={()=>!disabled && mouseClickEvent(index+0.5)} >
            <svg viewBox="0 0 25 30" className={'star-content '+activeLeftClassOptions.join(" ")}>
                <polygon points={starPoints} />
            </svg>
        </label>
        <label className='star-wrapper top-right' onMouseEnter={()=>!disabled && mouseEnterEvent(index+1)} onClick={()=>!disabled && mouseClickEvent(index+1)}>
            <svg viewBox="0 0 25 30" className={'star-content '+activeRightClassOptions.join(" ") }>
                <polygon points={starPoints} />
                Sorry, your browser does not support inline SVG.
            </svg>
        </label>
        <label className='star-wrapper'>
            <svg viewBox="0 0 25 30" className={'star-content '+defaultClassOptions.join(" ") }>
                <polygon points={starPoints} />
                Sorry, your browser does not support inline SVG.
            </svg>
        </label>
    </div>
    </div>
}