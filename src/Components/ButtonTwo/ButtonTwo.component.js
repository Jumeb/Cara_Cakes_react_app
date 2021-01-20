import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ButtonTwo.module.css';

const ButtonTwo = (props) => {
    const {link, title} = props;
return <NavLink to={link} className={[styles.btn, styles.btnHoverIcon].join(' ')}>{title} <span className={styles.btnIcon}>&#10095;</span></NavLink>
}

export default ButtonTwo;