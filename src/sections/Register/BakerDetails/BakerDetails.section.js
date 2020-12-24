import React, { useState } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

import './BakerDetails.section.css';
import {Selector} from '../../../Components';

const animatedComponents = makeAnimated();

const BakerDetails = () => {
    const [location] = useState([
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanill', label: 'Vanill' },
  { value: 'vanila', label: 'Vanila' },
  { value: 'vanlla', label: 'Vanlla' },
]);

const [categories] = useState([
  { value: 'birthday-cake', label: 'Birthday Cakes' },
  { value: 'wedding-cake', label: 'Wedding Cakes' },
  { value: 'cookies', label: 'Cookies' },
  { value: 'doughnuts', label: 'Doughnuts' },
  { value: 'pancakes', label: 'Pancakes' },
  { value: 'cup-cakes', label: 'Cup Cake' },
]);

    return (
         <section className="sec-bakersignup" id="signup">
            <div className="row-3">
                <div className="signup">
                    <div className="signup__form-1">
                        <form action="/signup" className="form" method="POST" novalidate>
                            <div className="form__group-2">
                                <input 
                                    className="form__input form__length-2"
                                    type="number"
                                    name="email" 
                                    id="Email"
                                    placeholder="ID Card Number" required />
                                <label for="Email" className="form__label">ID Card number</label>
                            </div>
                            <div className="form__select">
                                <Select
                                options={location}
                                components={animatedComponents}
                                isMulti={false}
                                styles={colourStyles}
                                className="form__length-3 form__select-input"
                                 />
                            </div>
                            <div className="form__select">
                                    <Select 
                                    options={categories}
                                    styles={colourStyles}
                                    components={animatedComponents} 
                                    isMulti 
                                    className="form__length-4 form__select-input" />
                                </div>
                            <div className="form__group-2">
                                <input 
                                    className="form__input form__length-5"
                                    type="password" 
                                    name="confirmPassword"
                                    id="conPassword"
                                    placeholder="Password" required />
                                <label for="con" className="form__label">Password</label>
                                <p className="txt-red pAuth">Password</p>
                            </div> 
                            <div className="form__group-2">
                                <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                                <button type="submit" className="btn btn-deep--pink">Sign Up</button>
                                <a href="/signup" className="btn btn-deep--pink">signup</a>
                            </div>
                        </form>
                    </div>
                    <div className="signup__form-2 txt-cnt">
                        <h2 className="title-lil-1 txt-white-2">
                            Sign up
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BakerDetails;

const colourStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#ff1493" : null,
      color: isFocused ? "white" : '#999',
    };
  },
  control: (base, {isFocused}) => ({
    ...base,
    border: 'none',
    // This line disable the blue border
    boxShadow: 'none',
    borderBottom: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: isFocused ? "#ff1493" : 'transparent',
    borderRadius: '2px',
    // overflow: 'hidden',
    // clipPath: ,
    
    '&:hover': {
        border: 'none',
        boxShadow: 'none',
        borderBottom: '2px',
        borderBottomStyle: 'solid',
        borderBottomColor: isFocused ? "#ff1493" : 'transparent',
    }
  })
};