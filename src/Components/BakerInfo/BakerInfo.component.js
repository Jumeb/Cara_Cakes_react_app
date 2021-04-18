import React, { useState } from 'react';
import { IoThumbsDownSharp, IoThumbsUpSharp } from 'react-icons/io5';
import { connect } from 'react-redux';

import { cups2, HLogo } from '../../res/img';
import { Thousand } from '../../utils/utilities';
import styles from './BakerInfo.module.css';
import { BASE_URL } from '../../utils/globalVariable';
import { BakerDetails, Notification } from '../';

const BakerInfo = (props) => {
    const { token, baker, setRbakers, user } = props;
    const [detail, setDetail] = useState(false);
    const [_baker, setBaker] = useState([]);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({});

    const ShowDetails = (baker) => {
        setDetail(true);
        setBaker(baker);
    }

    const Suspend = (id) => {
        fetch(`${BASE_URL}/baker/suspend/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Basic ${token}`
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

            if (statusCode === 200) {
                setRbakers(true);
            }

        })
            .catch(err => {
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.'
                })
        })
    }

    return (
        <div className={styles.bakerCard}> 
            <div className={styles.bakerInfo}>
                <img src={baker.companyImage ? `${BASE_URL}/${baker.companyImage}` : HLogo} alt="Baker name" className={styles.bakerImg} />
                <div className={styles.bakerId}>
                    <h2 className={styles.bakerTitle}>{baker.name}</h2>
                    <b className={styles.bakerSubTitle}>{baker.companyName}</b>
                </div>
                {user.type === 'Admin' &&<button className={styles.bakerButton} onClick={() => ShowDetails(baker)}>Details</button>}
            </div>
            <div className={styles.bakerStats}>
                <div className={styles.bakerNumber}>
                    <h2 className={styles.bakerTitle}>{baker.orders.ordered.length}</h2>
                    <b className={styles.bakerSubTitle}>Orders</b>
                </div>
                <div className={styles.bakerNumber}>
                    <h2 className={styles.bakerTitle}>{baker.followers.users.length}</h2>
                    <b className={styles.bakerSubTitle}>Followers</b>
                </div>
                <div className={styles.bakerNumber}>
                    <h2 className={styles.bakerTitle}>{baker.categories.length}</h2>
                    <b className={styles.bakerSubTitle}>Categories</b>
                </div>
                <div className={styles.bakerNumber}>
                    <h2 className={styles.bakerTitle}>{Thousand(baker.total)}</h2>
                    <b className={styles.bakerSubTitle}>Earned</b>
                </div>
            </div>
            <div className={styles.bakerFooter}>
                {/* <NavLink to="#" className={styles.bakerMsg}><IoMail className={styles.bakerIcon} /> MESSAGE</NavLink> */}
                <div className={styles.bakerRating}>
                    <b className={styles.bakerRatingVal}><IoThumbsUpSharp className={styles.bakerRatingIcon} /> {baker.likes.users.length}</b>
                    <b className={styles.bakerRatingVal}><IoThumbsDownSharp className={styles.bakerRatingIcon} /> {baker.dislikes.users.length}</b>
                </div>
                {user.type === 'Admin' && <button className={styles.bakerBtn} onClick={() => Suspend(baker._id)}>{baker.suspend ? 'Unsuspend' : 'Suspend'}</button>}
            </div>
            <BakerDetails detail={detail} setDetail={setDetail} baker={_baker} />
            <Notification message={message} show={show} setShow={setShow} />
        </div>
    )
}

const mapStateToProps = ({ auth, refresh }) => {
    return {
        token: auth.token,
        refresh: refresh.refresh,
        user: auth.user,
    }
}

export default connect(mapStateToProps)(BakerInfo);
