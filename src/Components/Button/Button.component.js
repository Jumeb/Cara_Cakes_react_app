import React from 'react';
import { Activity } from '..';

import styles from './Button.module.css';

const Button = (props) => {
    const {onClick, title, danger, loading} = props;
    return <button className={[styles.eventButton, danger && styles.eventButtonDelete].join(' ')} onClick={() => onClick()}>{loading ? <Activity /> : title}</button>
}

export default Button;