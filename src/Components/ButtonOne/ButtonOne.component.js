import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from  './ButtonOne.module.css'

const ButtonOne = (props) => {
    const {animate, link, title} = props;
    return <NavLink to={link} className={[styles.btn, animate === 'left' && styles.btnAnimatedLeft, animate === 'right' && styles.btnAnimatedRight].join(' ')}>{title}</NavLink>
}

export default ButtonOne;
