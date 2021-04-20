import React from 'react';

import styles from './WorkArea.module.css';

const WorkArea = (props) => {
    const {children} = props;
    return (
        <div className={styles.panelEvent}>
            {children}
        </div>
    )
}

export default WorkArea;
