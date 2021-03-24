import React from 'react'

import styles from './Baker.module.css';
import {BakersCard} from '../../Components';

const Baker = () => {
    return (
        <section className={styles.secDescription} id="stry">
            <h2 className={styles.title}>
                Our team of expert bakers
            </h2>
            <div className={styles.secContainer}>
                {bakers.map((baker, index) => <BakersCard baker={baker} key={index} />)}
            </div>
        </section>
    )
}

export default Baker;

const bakers = [
    {id: 1, name: 'James Bond'},
    {id: 2, name: 'James Bond'},
    {id: 3, name: 'James Bond'},
    {id: 4, name: 'James Bond'}
]
