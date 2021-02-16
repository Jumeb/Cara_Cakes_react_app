import React from 'react';

import styles from './Input.module.css';

const Input = (props) => {
    const {placeholder, label, value, setValue, len, type, error, setError} = props;
    return (
        <div className={styles.formGroup2}>
            <input 
                type={type}
                className={[
                    styles.formInput,
                    len === 1 ?  
                    styles.formLength1 :
                    len === 2 ?
                    styles.formLength2 :
                    len === 3 ?
                    styles.formLength3 :
                    len === 4 ?
                    styles.formLength4 :
                    styles.formLength5
                ].join(' ')} 
                name={label} id={label} 
                placeholder={placeholder} 
                onChange={setValue} />
                <label for={label} className={styles.formLabel}>{label}</label>
        </div>
    )
}

export default Input;
