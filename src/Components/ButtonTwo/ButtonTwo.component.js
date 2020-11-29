import React from 'react';

import './ButtonTwo.component.css';

const ButtonTwo = (props) => {
    const {link, title} = props;
    return <a href="/signup" className="btn-2 btn-2__hover-icon">Sign Up <span className="btn-2__icon">&#10095</span></a>
}

export default ButtonTwo;