import React from 'react';

import styles from './SquareInput.module.css';

const SquareInput = (props) => {
    const {label, placeholder} = props;
    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{label}</label>
            <input className={styles.inputField} placeholder={placeholder} />
        </div>
    )
}

export default SquareInput;
