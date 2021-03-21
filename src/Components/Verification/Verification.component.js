import React, { useEffect } from 'react';
import { Button } from '..';

import styles from './Verification.module.css';

const Verification = (props) => {
    const {message, verify, setVerify, onClick} = props;

    return (
        <div className={verify ? styles.notifyBackdrop : styles.notifyNoBackdrop}>
            <div className={[styles.notifyContainer, verify ? styles.showContainer : styles.hideContainer, message.type === 'error' && styles.dangerBorder, ].join(' ')}>
                <h2 className={[styles.notifyTitle, message.type === 'danger' && styles.dangerColor].join(' ')}>{message.title}</h2>
                <b className={styles.notifyMessage}>{message.message}</b>
                <div className={styles.notifyActions}>
                    <button className={[styles.notifyButtons, styles.danger].join(' ')} onClick={() => onClick(message.data._id)}>Delete</button>
                    <button className={styles.notifyButtons} onClick={() => setVerify(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Verification;