import React from 'react'

import styles from './SquareInput.module.css';

const SquareArea = (props) => {
    const {label, placeholder} = props;
    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{label}</label>
            <textarea className={styles.inputField} placeholder={placeholder} rows={5} >
            </textarea>
        </div>
    )
}

export default SquareArea;