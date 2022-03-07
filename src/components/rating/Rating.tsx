
import React, { FC, useEffect, useState } from 'react';
import "./rating.scss";

export enum RatingSizeType {
    Medium,
    Small,
    Large,
}

interface IRatingProps{
    disabled?:boolean,
    label?:string,
    value?:number,
    size?:RatingSizeType,
    count?:number,
    onChange?:(e?: React.MouseEvent) => void;
}

export default function Rating({disabled=false,label,value=0,size=RatingSizeType.Medium,count=5,onChange}:IRatingProps){
    return <div>Star Rating</div>
}