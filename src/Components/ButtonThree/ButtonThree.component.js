import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ButtonThree.module.css';

const ButtonThree = (props) => {
    const {link, title} = props;
return <NavLink to={link} className={[styles.btn, styles.btnHoverIcon].join(' ')}>{title}</NavLink>
}

export default ButtonThree;