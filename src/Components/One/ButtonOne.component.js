import React from 'react';
import { Activity } from '..';

import styles from './One.module.css';

const ButtonOne = (props) => {
    const {title, onClick, loading} = props;
    return <button className={[styles.btn, styles.btnHoverIcon].join(' ')} onClick={() => onClick()}>{loading ? <Activity size={0.9} /> :title}</button>
}

export default ButtonOne;