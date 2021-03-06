import React from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { Button, Spacer } from '../../../Components';

import {vals3 } from '../../../res/img';
import styles from './CartDetail.module.css';

const CartDetail = (props) => {
    const {isDetail, setIsDetail} = props;

    return (
        <div className={isDetail ? styles.cartDetail : styles.cartNoDetail}>
            <div className={styles.cartDetailImgContainer}>
                <div className={styles.cartDetailTitle}>
                    <h2>Pastry name</h2>
                </div>
                <img src={vals3} alt="Product" className={styles.cartDetailImg} />
                <div className={styles.cartDetailActions}>
                    <button className={styles.cartDetailActionButton}><IoRemove /></button>
                    <b className={styles.cartDetailQtyText}>Quantity: 3</b>
                    <button className={styles.cartDetailActionButton}><IoAdd /></button>
                </div>
            </div>
            <div className={styles.cartDetails}>
                <h1>Pastry Details</h1>
                <h1 className={styles.cartDescription}>Category: Wedding Cake</h1>
                <h1 className={styles.cartDescription}>Price: 40,000FCFA</h1>
                <h1 className={styles.cartDescription}>Description</h1>
                <p className={styles.cartDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <div>
                    <Button title="Close" onClick={() => setIsDetail()} />
                </div>
            </div>
        </div>
    )
}

export default CartDetail;
