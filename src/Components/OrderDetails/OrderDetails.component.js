import React, { useEffect, useState } from 'react';
import { IoClose, IoThumbsDown, IoThumbsUp, IoPhonePortraitOutline, IoStatsChart, IoWallet, IoBrush } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Notification } from '..';
import { BASE_URL } from '../../utils/globalVariable';
import { Thousand, HNumber } from '../../utils/utilities';
import { setBaker } from '../../redux/Actions/Auth.actions';
import styles from './OrderDetails.module.css';
import { setRefresh } from '../../redux/Actions/Refresh.actions';

const OrderDetails = (props) => {
    const { detail, setDetail, order, user } = props;
    
    const [loading, setLoading] = useState(false);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(false);

    useEffect(() => {
        if (order.length !== 0) {
            setLikes(order.userId.likes.users.length);
            setDislikes(order.userId.dislikes.users.length);
        }
        props.setRefresh(false);
    }, [detail]);

    const Close = () => {
        setDetail(false);
    }

    const disLikeUser = (id) => {
        setLoading(true);
        if (user.type === 'Admin') {
            return false;
        }
        fetch(`${BASE_URL}/user/dislike/${id}?baker=${user._id}`, {
            method: 'POST',
        })
        .then(res => {
            const statusCode = res.status;
            const response = res.json();
            return Promise.all([statusCode, response]);
        })
        .then(res => {
            const statusCode = res[0];
            const response = res[1].response;
            setLoading(false);

            if (statusCode === 200) {
                setLikes(response.likes.users.length);
                setDislikes(response.dislikes.users.length);
            }

            if (statusCode === 500) {
                console.log('error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    const likeUser = (id) => {
        setLoading(true);
        if (user.type === 'Admin') {
            return false;
        }
        fetch(`${BASE_URL}/user/like/${id}?baker=${user._id}`, {
            method: 'POST',
        })
        .then(res => {
            const statusCode = res.status;
            const response = res.json();
            return Promise.all([statusCode, response]);
        })
        .then(res => {
            const statusCode = res[0];
            const response = res[1].response;
            setLoading(false);

            if (statusCode === 200) {
                setLikes(response.likes.users.length);
                setDislikes(response.dislikes.users.length);
            }

            if (statusCode === 404) {
                console.log(response)
            }

            if (statusCode === 500) {
                console.log('error 500');
            }
        })
        .catch(err => {
            console.log(err, 'ksjdkfljlsjf');
        })
    }

    const stopClose = (e) => {
        e.stopPropagation();
    }


    return (
        <div className={detail ? styles.notifyBackdrop : styles.notifyNoBackdrop} onClick={() => Close()}>
            <div className={[styles.notifyContainer, detail ? styles.showContainer : styles.hideContainer].join(' ')} onClick={(e) => stopClose(e)}>
                {order.length !== 0 && <div className={styles.clientDets}>
                    <h2 className={styles.clientName}>{order.userId.name}</h2>
                    {(order.status !== 'New') && (order.status !== 'Registered') && (order.status !== 'Processing') && <div className={styles.likeActions}>
                        <span className={styles.likeButton} onClick={() => likeUser(order.userId._id)}><IoThumbsUp className={styles.icon} /> Likes: {likes} </span>
                        <span className={styles.likeButton} onClick={() => disLikeUser(order.userId._id)}><IoThumbsDown className={styles.icon} /> Dislikes: {dislikes}</span>
                    </div>}
                </div>}
                <div className={styles.pastriesScroll}>
                    {order.length !== 0 &&
                        order.pastries.map((pastry, index) =>
                            <>
                            <div className={styles.pastryContainer}>
                                {pastry.pastryId.discount > 0 && <div className={styles.pastryDiscount}><IoStatsChart /> Discount: {pastry.pastryId.discount}%</div>}
                                <div className={styles.pastryName}>{pastry.pastryId.name}</div>
                                <img src={`${BASE_URL}/${pastry.pastryId.image}`} alt={'pastry.price'} className={styles.pastryImage} />
                                <div className={styles.pastryPrice}><IoWallet className={styles.icon} /> Price:{ Thousand(pastry.pastryId.discount ? (((100 - pastry.pastryId.discount)/100) * pastry.pastryId.price * pastry.quantity) : pastry.pastryId.price * pastry.quantity) }XAF</div>
                                <div className={styles.pastryLikes}><IoThumbsUp className={styles.icon} /> Likes: {Thousand(pastry.pastryId.likes.users.length)}</div>
                                <div className={styles.pastryDislikes}><IoThumbsDown className={styles.icon} /> Dislikes: {Thousand(pastry.pastryId.dislikes.users.length)}</div>
                                <div className={styles.pastryQty}><IoStatsChart className={styles.icon} /> Quantity: {pastry.quantity}</div>
                                <div className={styles.pastryMessage2}><IoBrush className={styles.icon} /> Msg: {pastry.message || "'empty'"}</div>
                            </div>
                        </>)}
                </div>
                <button className={styles.closeButton} onClick={() => Close()}>Close</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({auth}) => {
    return {
        user: auth.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setBaker, setRefresh}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);