import React from 'react';

import styles from './PastryCard.module.css';
import { logo5, vals3 } from '../../res/img';
import { Button } from '..';

const PastryCard = (props) => {
    const {isDetail, setIsDetail} = props;
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
                    <Button title="Details" onClick={() => setIsDetail()} />
                    <Button title="Add to Cart" onClick={() => console.log('added')} />
                </div>
            </div>
    )
}

export default PastryCard;
