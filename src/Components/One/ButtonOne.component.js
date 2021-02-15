import React from 'react';

import styles from './One.module.css';

const ButtonOne = (props) => {
    const {title, onClick} = props;
    return <button className={[styles.btn, styles.btnHoverIcon].join(' ')} onClick={() => onClick()}>{title}</button>
}

export default ButtonOne;