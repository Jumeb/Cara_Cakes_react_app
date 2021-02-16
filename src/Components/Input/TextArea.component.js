import React from 'react';

import styles from './Input.module.css';

const TextArea = (props) => {
    const {placeholder, label, value, setValue, len, type, error, setError} = props;
    return (
        <div className={styles.formGroup2}>
            <textarea 
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
                name="name" id={label} 
                placeholder={placeholder} 
                onChange={setValue}></textarea>
            {/* <label for="Name" className={styles.formLabel}>{label}</label> */}
        </div>
    )
}

export default TextArea;
