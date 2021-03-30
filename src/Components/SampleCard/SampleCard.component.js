import React from 'react';

import styles from './SampleCard.module.css';
import {ButtonTwo} from '../../Components';

const SampleCard = () => {
    return (
        <div className={styles.card}>
            <div className={[styles.cardView, styles.cardViewFront].join(' ')}>
                <div className={[styles.cardPic, styles.cardPic1].join(' ')}>
                    &nbsp;
                            </div>
                <div style={{ textAlign: 'center' }}>
                    <h5 className={[styles.cardHeading, styles.cardHeading1].join(' ')}>Cup cakes</h5>
                    <ul className={[styles.cardList, styles.cardList1].join(' ')}>
                        <li>Chocolate flavour</li>
                        <li>Vanilla flavour</li>
                        <li>Strawberry flavour</li>
                        <li>Custom flavours by the client</li>
                    </ul>
                </div>
            </div>
            <div className={[styles.cardView, styles.cardViewBack, styles.cardViewBack1].join(' ')}>
                <div className={styles.cardInfo}>
                    <p className={styles.cardJust}>Just</p>
                    <p className={styles.cardPrice}>
                        1000FCFA
                                </p>
                </div>
                <div className="txt-cnt margin-top-small" style={{ textAlign: 'center', marginTop: '40px' }}>
                    <ButtonTwo link="/register" title="SignUp" />
                </div>
            </div>
        </div>
    );
};

export default SampleCard;
