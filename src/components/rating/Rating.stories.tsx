import React from 'react';
import {Rating, RatingSizeType} from './Rating';

export default {
    title: 'Rating',
    component: Rating,
    argTypes: {
        size: {
            option: [RatingSizeType.Small, RatingSizeType.Medium, RatingSizeType.Large]
        },
    },
};

const RatingStyle:React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const Template = (args: any) => <Rating {...args} />;


export const defaultRating = Template.bind({});

export const DiffInitRatingValue = () => (
    <div style = {RatingStyle}>
    <Rating value = {1}/>
    <Rating value = {2}/>
    <Rating value = {3}/>
    <Rating value = {4}/>
    <Rating value = {5}/>
    </div>
)

export const DiffMaxRating = () => (
    <div style = {RatingStyle}>
    <Rating count = {1} />
    <Rating count = {3} />
    <Rating count = {5} />
    <Rating count = {8} />
    <Rating count = {10} />
    </div>
)

export const DiffSizeRating = () => (
    <div style = {RatingStyle}>
        <div className='rating-small'>Small</div>
        <Rating size={RatingSizeType.Small}/>
        <div className='rating-medium' >Medium</div>
        <Rating/>
        <div className='rating-large' >Large</div>
        <Rating size={RatingSizeType.Large}/>
    </div>
);