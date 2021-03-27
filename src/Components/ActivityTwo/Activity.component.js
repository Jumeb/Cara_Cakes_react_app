import React from 'react';

import styles from './Activity.module.css'

const Activity = (props) => {
    const {size} = props;

    return <div className={styles.spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
}

export default Activity;
