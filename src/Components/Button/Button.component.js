import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
    const {onClick, title, danger} = props;
    return <button className={[styles.eventButton, danger && styles.eventButtonDelete].join(' ')} onClick={() => onClick()}>{title}</button>
}

export default Button;