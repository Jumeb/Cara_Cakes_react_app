import React from 'react';
import { logo5, vals3 } from '../../res/img';

import styles from './BakerCard.module.css';

const BakerCard = () => {
    return (
            <div className={styles.bakerListImgContainer}>
                <div className={styles.bakerListTitle}>
                    <h2>Company Nse</h2>
                </div>
                <img src={vals3} alt="Product" className={styles.bakerListImg} />
                <div className={styles.bakerListImgLogoContainer}>
                    <img src={logo5} alt="Product" className={styles.bakerListImgLogo}/>
                </div>
                <div className={styles.bakersButtonContainer}>
                    <button className={styles.bakersButton}>Details</button>
                    <button className={styles.bakersButton}>Shop</button>
                </div>
            </div>
    )
}

export default BakerCard;
