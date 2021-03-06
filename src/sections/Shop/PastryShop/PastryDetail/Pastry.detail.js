import React from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { Button, Spacer } from '../../../../Components';

import {logo3, logo5, vals3 } from '../../../../res/img';
import styles from './PastryDetail.module.css'

const PastryDetail = (props) => {
    const {addToCart, isDetail, setIsDetail} = props;
    return (
       <div className={isDetail ? styles.pastryDetail : styles.pastryNoDetail}>
            <div className={styles.pastryDetailImgContainer}>
                <div className={styles.pastryDetailTitle}>
                    <h2>Pastry Name</h2>
                </div>
                <img src={vals3} alt="Product" className={styles.pastryDetailImg} />
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
                <h1 className={styles.pastryDescription}>Category</h1>
                <ul className={styles.pastryDescriptionList}>
                    <li  className={styles.pastryDescriptionText}>Birthday Cake</li>
                </ul>
                <h1 className={styles.pastryDescription}>Ordered: 45</h1>
                <h1 className={styles.pastryDescription}>About Pastry name</h1>
                <p className={styles.pastryDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <div>
                    <Button title="Close" onClick={() => setIsDetail()} />
                </div>
            </div>
        </div>
    )
}

export default PastryDetail;
