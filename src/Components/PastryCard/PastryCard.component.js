import React from 'react';

import styles from './PastryCard.module.css';
import { logo5, vals3 } from '../../res/img';

const PastryCard = () => {
    return (
            <div className={styles.pastryListImgContainer}>
                <div className={styles.pastryListTitle}>
                    <h2>Pastry Name</h2>
                </div>
                <img src={vals3} alt="Product" className={styles.pastryListImg} />
                <div className={styles.pastryListImgLogoContainer}>
                    <img src={logo5} alt="Product" className={styles.pastryListImgLogo} />
                </div>
                <div className={styles.pastriesButtonContainer}>
                    <button className={styles.pastriesButton}>Details</button>
                    <button className={styles.pastriesButton}>Add to cart</button>
                </div>
            </div>
    )
}

export default PastryCard;
