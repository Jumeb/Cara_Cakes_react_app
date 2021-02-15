import React from 'react';

import styles from './OrderDetail.module.css'
import { vals3, vals4, vals5 } from '../../../res/img';
import { Button, Spacer } from '../../../Components';

const OrderDetail = (props) => {
    const {isDetail, setIsDetail} = props;
    return (
        <div className={isDetail ? styles.orderDetail: styles.orderNoDetail}>
            <Spacer />
            <div className={styles.orderDetailImgContainer}>
                <div className={styles.orderDetailTitle}>
                    <h2>Order Summary</h2>
                </div>
                <div className={styles.orderDetailImgs}>
                    <img src={vals5} alt="Product" className={[styles.orderDetailImg1 ,styles.orderDetailHover].join(' ')} />
                    <img src={vals4} alt="Product" className={[styles.orderDetailImg2 ,styles.orderDetailHover].join(' ')} />
                    <img src={vals3} alt="Product" className={[styles.orderDetailImg3 ,styles.orderDetailHover].join(' ')} />
                </div>
            </div>
            <div className={styles.orderDetails}>
                <h1>Order Details</h1>
                <h1 className={styles.orderDescription}>Order status</h1>
                <ul className={styles.orderDescriptionList}>
                    <li  className={styles.orderDescriptionText}>Processing</li>
                    <li  className={styles.orderDescriptionText}>Registered</li>
                    <li  className={styles.orderDescriptionText}>On the way</li>
                    <li  className={styles.orderDescriptionText}>Delivered</li>
                </ul>
                <h1 className={styles.orderDescription}>Pastries Ordered</h1>
                <ul className={styles.orderDescriptionList}>
                    <li  className={styles.orderDescriptionText}>Ice cake</li>
                    <li  className={styles.orderDescriptionText}>Fire Cake</li>
                    <li  className={styles.orderDescriptionText}>Banana cake</li>
                    <li  className={styles.orderDescriptionText}>Cupcakes</li>
                </ul>
                <h1>Total: 193,000FCFA</h1>
                <div>
                    <Button title="Close" onClick={() => setIsDetail()} />
                </div>
            </div>
        </div>
    )
}

export default OrderDetail;
