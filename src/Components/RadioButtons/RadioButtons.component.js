import React from 'react';

import styles from './RadioButton.module.css';

const RadioButton = (props) => {
    const {type, setType} = props;
    return (
        <div className={styles.formRadioGroup} onClick={() => setType(type)} >
            <input type="radio" className={styles.formRadioInput} id={type} name="size" />
            <label for={type} className={styles.formRadioLabel}>
                <span  className={styles.formRadioButton} />
                {type}
            </label>
        </div>
    )
}

export default RadioButton;
