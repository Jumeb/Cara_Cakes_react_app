import React from 'react';

import styles from './SampleCard.module.css';
import {ButtonTwo} from '../../Components';
import { Thousand } from '../../utils/utilities';
import { BASE_URL } from '../../utils/globalVariable';
import {  IoStorefront } from 'react-icons/io5';

const SampleCard = ({ pastry, index }) => {
    return (
        <div className={styles.card}>
            <div className={[styles.cardView, styles.cardViewFront].join(' ')}>
                <div className={[styles.cardPic, index === 1 ? styles.cardPic1 : index === 2 ? styles.cardPic2 : styles.cardPic3].join(' ')}>
                    <img src={pastry && `${BASE_URL}/${pastry.image}`} alt={'name'} className={styles.cardImage} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h5 className={[styles.cardHeading, index === 1 ? styles.cardHeading1 : index === 2 ? styles.cardHeading2 : styles.cardHeading3].join(' ')}>{pastry && pastry.name.substr(0, 20)}{pastry && pastry.name.length >= 20 && '...'}</h5>
                    <ul className={[styles.cardList, index === 1 ? styles.cardList1 : index === 2 ? styles.cardList2 : styles.cardList3].join(' ')}>
                        <li><IoStorefront />Company: {pastry && pastry.creator.companyName}</li>
                        <li>CEO: {pastry && pastry.creator.name}</li>
                        <li>Type: {pastry && pastry.type}</li>
                        <li>Discount: {pastry && pastry.discount}%</li>
                    </ul>
                </div>
            </div>
            <div className={[styles.cardView, styles.cardViewBack, index === 1 ? styles.cardViewBack1 : index === 2 ? styles.cardViewBack2 : styles.cardViewBack3].join(' ')}>
                <div className={styles.cardInfo}>
                    <p className={styles.cardJust}>Just</p>
                    <p className={styles.cardPrice}>
                        {pastry && Thousand(pastry.price)} FCFA
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
