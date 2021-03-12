import React, { useEffect } from 'react';

import styles from './Notification.module.css';

const Notification = (props) => {
    const {message, show, setShow} = props;

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 3000);
    }, [show])

    return (
        <div className={[styles.notifyContainer, show ? styles.showContainer : styles.hideContainer, message.type === 'error' && styles.dangerBorder, ].join(' ')}>
            <h2 className={[styles.notifyTitle, message.type === 'error' && styles.dangerColor].join(' ')}>{message.title}</h2>
            <b className={styles.notifyMessage}>{message.message}</b>
        </div>
    )
}

export default Notification;