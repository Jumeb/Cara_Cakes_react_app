import React, { useState } from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { connect } from 'react-redux';
import { Button, Notification, Spacer } from '../../../../Components';

import {logo3, logo5, vals3 } from '../../../../res/img';
import { BASE_URL } from '../../../../utils/globalVariable';
import styles from './PastryDetail.module.css'

const PastryDetail = (props) => {
    const {isDetail, setIsDetail, detail, user} = props;
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(false);
    const [count, setCount] = useState(0);

    const AddToCart = (id) => {
        setLoading(true);
        fetch(`${BASE_URL}/user/addToCart/${id}?user=${user._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            const statusCode = res.status;
            const response = res.json();
            return Promise.all([statusCode, response]);
        })
        .then(res => {
            const statusCode = res[0];
            const response = res[1];
            setLoading(false);

            if(statusCode === 200) {
                setCount(count + 1);
                if(count === 0) {
                    setShow(true);
                    setMessage({
                        type: 'success',
                        message: `${detail.name} added to cart`,
                        title: 'Success'
                    });
                }
            }

            if(statusCode === 422) {
                setShow(true);
                setMessage({
                    type: 'error',
                    message: `${detail.name} not added to cart.`,
                    title: 'Failed'
                });
            }

        })
        .catch(err => {
            setShow(true);
            setMessage({
                type: 'error',
                title: 'Unexpected Error',
                    message: 'Please check your internet connection.'
            });
        })
    }

    const SubFromCart = (id) => {
        setLoading(true);
        fetch(`${BASE_URL}/user/subFromCart/${id}?user=${user._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            const statusCode = res.status;
            const response = res.json();
            return Promise.all([statusCode, response]);
        })
        .then(res => {
            const statusCode = res[0];
            const response = res[1];
            setLoading(false);

            if(statusCode === 200) {
                setCount(count - 1);
            }

            if(statusCode === 422) {
                setShow(true);
                setMessage({
                    type: 'error',
                    message: `${detail.name} not added to cart.`,
                    title: 'Failed'
                });
            }
        })
        .catch(err => {
            setShow(true);
            setMessage({
                type: 'error',
                title: 'Unexpected Error',
                    message: 'Please check your internet connection.'
            });
        })
    }

    return (
       <div className={isDetail ? styles.pastryDetail : styles.pastryNoDetail}>
            <div className={styles.pastryDetailImgContainer}>
                <div className={styles.pastryDetailTitle}>
                    <h2>{detail.name}</h2>
                </div>
                <img src={detail.image ? `${BASE_URL}/${detail.image}` : vals3} alt={detail.name}className={styles.pastryDetailImg} />
                <div className={styles.pastryDetailImgLogoContainer}>
                    <img src={logo5} alt={detail.name}className={styles.pastryDetailImgLogo} />
                </div>
                {count === 0 ? (
                    <div className={styles.pastryDetailActions}>
                        <button className={styles.pastryDetailButton} onClick={() => AddToCart(detail._id)}>
                            Add to cart
                        </button>
                    </div>                    
                ) : (
                    <div className={styles.pastryDetailActions}>
                        <button className={styles.pastryDetailActionButton} onClick={() => SubFromCart(detail._id)}><IoRemove /></button>
                        <b className={styles.pastryDetailQtyText}>Quantity: {count}</b>
                        <button className={styles.pastryDetailActionButton} onClick={() => AddToCart(detail._id)}><IoAdd /></button>
                    </div>
                ) }
            </div>
            <div className={styles.pastryDetails}>
                {count !== 0 && (
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
            <Notification message={message} show={show} setShow={setShow} />
        </div>
    )
}

const mapStateToProps = ({auth}) => {
    return {
        user: auth.user,
    }
}

export default connect(mapStateToProps)(PastryDetail);
