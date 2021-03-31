import React, { useEffect, useState } from 'react';
import { IoClose, IoThumbsDown, IoThumbsUp, IoPhonePortraitOutline, IoStatsChart, IoWallet, IoBrush } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Notification } from '..';
import { BASE_URL } from '../../utils/globalVariable';
import { Thousand, HNumber } from '../../utils/utilities';
import { setBaker } from '../../redux/Actions/Auth.actions';
import styles from './OrderDetails.module.css';
import { logo5, vals3 } from '../../res/img';
import { setRefresh } from '../../redux/Actions/Refresh.actions';

const OrderDetails = (props) => {
    const { detail, setDetail, order, user } = props;
    
    const [loading, setLoading] = useState(false);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(false);

    useEffect(() => {
        props.setRefresh(false);
        return () => {
            setLikes(0);
            setDislikes(0);
        }
    }, [detail]);

    const Close = () => {
        setDetail(false);
        // props.setRefresh(true);
    }

    return (
        <div className={detail ? styles.notifyBackdrop : styles.notifyNoBackdrop} onClick={() => Close()}>
            <div className={[styles.notifyContainer, detail ? styles.showContainer : styles.hideContainer].join(' ')}>
                <button className={styles.closeButton} onClick={() => Close()}><IoClose /> Close</button>
                {order.length !== 0 && <div className={styles.clientName}>{order.userId.name}</div>}
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
                                <div className={styles.pastryQty}><IoThumbsDown className={styles.icon} /> Quantity: {pastry.quantity}</div>
                                <div className={styles.pastryMessage2}><IoBrush className={styles.icon} /> Message: {pastry.message || "'empty'"}</div>
                            </div>
                        </>)}
                </div>
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