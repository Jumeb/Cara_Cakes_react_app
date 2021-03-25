import React from 'react';

import styles from './SquareInput.module.css';

const SquareInput = (props) => {
    const {
        label, 
        placeholder, 
        type, 
        value, 
        setValue, 
        error, 
        setError,
        name,
    } = props;
    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{label}</label>
            <input
                className={[styles.inputField, error && styles.inputInvalid].join(' ')}
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                onChange={setValue}
            />
        </div>
    )
}

export default SquareInput;
