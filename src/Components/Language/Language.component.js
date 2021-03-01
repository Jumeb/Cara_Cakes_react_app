import React, { useState } from 'react';
import { IoCaretDown, IoCaretForward } from 'react-icons/io5';

import styles from './Language.module.css';


const Language = () => {
    const [list, setList] = useState(false);
    const [lan, setLan] = useState('EN');

    const setLanguage = (lan) => {
        setLan(lan);
        setList(false);
    }

    return (
        <div className={styles.lanContainer}>
            <span className={styles.lanButton} onClick={() => setList(!list)}>{lan} {list ? <IoCaretDown className={styles.lanIcon} /> : <IoCaretForward className={styles.lanIcon} />}</span>
            <div className={list ? styles.lanList : styles.lanNoList}>
                <b className={styles.languages} onClick={() => setLanguage('EN')}>EN</b>
                <br />
                <b className={styles.languages} onClick={() => setLanguage('FR')}>FR</b>
                <br />
                <b className={styles.languages} onClick={() => setLanguage('DE')}>DE</b>
                <br />
                <b className={styles.languages} onClick={() => setLanguage('ES')}>ES</b>
            </div>
        </div>
    )
}

export default Language;