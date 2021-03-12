import React from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { Button, Spacer } from '../../../../Components';

import {logo3, logo5, vals3 } from '../../../../res/img';
import { BASE_URL } from '../../../../utils/globalVariable';
import styles from './PastryDetail.module.css'

const PastryDetail = (props) => {
    const {addToCart, isDetail, setIsDetail, detail} = props;
    return (
       <div className={isDetail ? styles.pastryDetail : styles.pastryNoDetail}>
            <div className={styles.pastryDetailImgContainer}>
                <div className={styles.pastryDetailTitle}>
                    <h2>{detail.name}</h2>
                </div>
                <img src={detail.image ? `${BASE_URL}/${detail.image}` : vals3} alt="Product" className={styles.pastryDetailImg} />
                <div className={styles.pastryDetailImgLogoContainer}>
                    <img src={logo5} alt="Product" className={styles.pastryDetailImgLogo} />
                </div>
                {addToCart ? (
                    <div className={styles.pastryDetailActions}>
                        <button className={styles.pastryDetailButton}>
                            Add to cart
                        </button>
                    </div>                    
                ) : (
                    <div className={styles.pastryDetailActions}>
                        <button className={styles.pastryDetailActionButton}><IoRemove /></button>
                        <b className={styles.pastryDetailQtyText}>Quantity: 3</b>
                        <button className={styles.pastryDetailActionButton}><IoAdd /></button>
                    </div>
                ) }
            </div>
            <div className={styles.pastryDetails}>
                {addToCart && (
                    <input type="text" placeholder="Message on cake" className={styles.pastryMessage} />
                )}
                <h1 className={styles.pastryDescription}>Category: {detail.type}</h1>
                {/* <h1 className={styles.pastryDescription}>Ordered: {detail.ordered}</h1> */}
                <h1 className={styles.pastryDescription}>About {detail.name}</h1>
                <p className={styles.pastryDescriptionText}>{detail.description}</p>
                <div>
                    <Button title="Close" onClick={() => setIsDetail()} />
                </div>
            </div>
        </div>
    )
}

export default PastryDetail;
