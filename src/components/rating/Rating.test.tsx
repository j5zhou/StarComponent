import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {Rating,RatingSizeType} from './Rating';
import internal from 'stream';

describe("Rating",()=>{
    const defaultValue = {disabled:false, label:"hello", value:4, size:RatingSizeType.Large, count:5};
    
    it('should match snapshot',()=>{
        const {asFragment} = render(<Rating/>);
        expect(asFragment()).toMatchSnapshot();
    });
    
    describe('should render the default Rating Components',()=>{
        beforeAll(()=>{
        });
        it('should have 5 star',()=>{
            const wrapper = render(<Rating/>);
            const elements = wrapper.queryAllByTestId("star");
            expect(elements.length).toBe(defaultValue.count);
        });
        it('should have 5 stars and first 4 star should filled with yellow color',()=>{
            const wrapper = render(<Rating/>);
            const elements = wrapper.queryAllByTestId("starSVG");
            expect(elements.length).toBe(2*defaultValue.count);
            for(let i=0;i<2*defaultValue.count;i++){
                if(i<defaultValue.value*2){
                    expect(elements[i]).toHaveClass("fill");
                }else{
                    expect(elements[i]).not.toHaveClass("fill");
                }
            }
        });
        it('should have the large size',()=>{
            const wrapper = render(<Rating/>);
            const element = wrapper.container.firstChild;
            expect(element).toHaveClass("large");
        });
        it('should be enable',()=>{
            const wrapper = render(<Rating/>);
            const elements = wrapper.queryAllByTestId("starSVG");
            for(let i=0;i<2*defaultValue.count;i++){
                expect(elements[i]).not.toHaveClass("disabled");
            }
        });

    });

    describe("Changing the props should render the rating components correspondingly",()=>{
        it("should render correctly when changing the count number",()=>{
            const newCount = 8;
            const wrapper = render(<Rating count={newCount}/>);
            const elements = wrapper.queryAllByTestId("star");
            expect(elements.length).toBe(newCount);
        });
        it("should render correctly when changing the value to have a fraction",()=>{
            const newValue = 2.5;
            const wrapper = render(<Rating value={newValue}/>);
            const elements = wrapper.queryAllByTestId("starSVG");
            for(let i=0;i<2*defaultValue.count;i++){
                if(i<newValue*2){
                    expect(elements[i]).toHaveClass("fill");
                }else{
                    expect(elements[i]).not.toHaveClass("fill");
                }
            }
        });
        it('should render correctly when changing the different size',()=>{
            const small = RatingSizeType.Small;
            const wrapper = render(<Rating size={small}/>);
            const element = wrapper.container.firstChild;
            expect(element).toHaveClass("small");

            const medium = RatingSizeType.Medium;
            const wrapper2 = render(<Rating size={medium}/>);
            const element2 = wrapper2.container.firstChild;
            expect(element2).toHaveClass("medium");
        });
        it('should render correctly when changing the disabled to be true',()=>{
            const wrapper = render(<Rating disabled={true}/>);
            const elements = wrapper.queryAllByTestId("starSVG");
            for(let i=0;i<2*defaultValue.count;i++){
                expect(elements[i]).toHaveClass("disabled");
            }
        });

    });
})
  