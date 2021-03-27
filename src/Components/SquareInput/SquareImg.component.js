import React, { useEffect, useState } from 'react'

import styles from './SquareInput.module.css';

const SquareImage = (props) => {
    const {
        label,
        type,
        value,
        setValue,
        error,
        setError,
        name,
    } = props;

    const [image, setImage] = useState('');

    const SetImage = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
        setValue(event);
    }

    return (
        <div className={styles.sqrContainer}>
            <label className={styles.sqrImgFile} htmlFor={label}>{label}</label>
            <input
                type={type}
                id={label}
                value={value}
                hidden
                onChange={(event) => SetImage(event)}
            />
            {/* {image ? <img className={styles.sqrImg} src={image} alt={label} /> : <div className={styles.sqrImgSpc} />} */}
            
        </div>
    )
}

export default SquareImage;
