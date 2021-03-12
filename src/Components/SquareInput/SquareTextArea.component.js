import React from 'react'

import styles from './SquareInput.module.css';

const SquareArea = (props) => {
    const {
        label, 
        placeholder,
        value, 
        setValue, 
        error, 
        setError
    } = props;
    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{label}</label>
            <textarea 
                className={[styles.inputField, error && styles.inputInvalid].join(' ')} 
                placeholder={placeholder} 
                rows={5} 
                onChange={setValue}
            >
            </textarea>
        </div>
    )
}

export default SquareArea;