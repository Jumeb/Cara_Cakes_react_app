import React from 'react';

import styles from './Sample.module.css';
import {SampleCard} from '../../Components';

const Sample = () => {
    return (
        <section className={styles.secSample} id="sec-sample flvs">
                <h2 className={styles.secTitle} id="flvs">
                    Feel the flavour with every bite
                </h2>
            <div className={styles.sampleRow}>
                <div className={styles.secSide}>
                    <SampleCard />
                </div>
                <div className={styles.secSide}>
                    <SampleCard />
                </div>
                <div className={styles.secSide}>
                    <SampleCard />
                </div>
            </div>
        </section>
    )
}

export default Sample;