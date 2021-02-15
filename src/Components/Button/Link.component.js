import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Button.module.css';

const Link = (props) => {
    const {link, title, danger} = props;
    return <NavLink to={link} className={[styles.eventButton, danger && styles.eventButtonDelete].join(' ')}>{title}</NavLink>
}

export default Link;