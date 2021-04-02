import React, { useState } from 'react';
import { IoThumbsDownSharp, IoThumbsUpSharp } from 'react-icons/io5';
import { connect } from 'react-redux';
import { UserDetails } from '..';

import { cups2 } from '../../res/img';
import { BASE_URL } from '../../utils/globalVariable';
import { HNumber, Thousand } from '../../utils/utilities';
import styles from './UserInfo.module.css';

const UserInfo = (props) => {
    const { user, token, setRusers } = props;
    const [_user, setUser] = useState([]);
    const [detail, setDetail] = useState(false);

    const ShowDetail = (user) => {
        setUser(user);
        setDetail(true);
    };

    const Suspend = (id) => {
        fetch(`${BASE_URL}/user/suspend/${id}`, {
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
                    setRusers(true);
                }

            })
            .catch(err => {
                console.log(err);
            })
    }
    
    return (
        <div className={styles.bakerCard}> 
            <div className={styles.bakerInfo}>
                <img src={cups2} alt="Baker name" className={styles.bakerImg} />
                <div className={styles.bakerId}>
                    <h2 className={styles.bakerTitle}>{user.name.substr(0, 12)}</h2>
                    <b className={styles.bakerSubTitle}>{HNumber(user.telNumber)}</b>
                </div>
                <button className={styles.bakerButton} onClick={() => ShowDetail(user)}>Details</button>
            </div>
            <div className={styles.bakerStats}>
                <div className={styles.bakerNumber}>
                    <h2 className={styles.bakerTitle}>{user.orders.ordered.length}</h2>
                    <b className={styles.bakerSubTitle}>Orders</b>
                </div>
                <div className={styles.bakerNumber}>
                    <h2 className={styles.bakerTitle}>10</h2>
                    <b className={styles.bakerSubTitle}>Ordered</b>
                </div>
                <div className={styles.bakerNumber}>
                    <h2 className={styles.bakerTitle}>5</h2>
                    <b className={styles.bakerSubTitle}>Categories</b>
                </div>
                <div className={styles.bakerNumber}>
                    <h2 className={styles.bakerTitle}>{Thousand(user.total)}</h2>
                    <b className={styles.bakerSubTitle}>Spent</b>
                </div>
            </div>
            <div className={styles.bakerFooter}>
                {/* <NavLink to="#" className={styles.bakerMsg}><IoMail className={styles.bakerIcon} /> MESSAGE</NavLink> */}
                <div className={styles.bakerRating}>
                    <b className={styles.bakerRatingVal}><IoThumbsUpSharp className={styles.bakerRatingIcon} /> {user.likes.users.length}</b>
                    <b className={styles.bakerRatingVal}><IoThumbsDownSharp className={styles.bakerRatingIcon} /> {user.dislikes.users.length}</b>
                </div>
                <button className={styles.bakerBtn} onClick={() => Suspend(user._id)}>{user.suspend ? 'Unsuspend' : 'Suspend'}</button>
            </div>
            <UserDetails detail={detail} setDetail={setDetail} _user={_user} />
        </div>
    )
}

const mapStateToProps = ({ auth, refresh }) => {
    return {
        token: auth.token,
        refresh: refresh.refresh,
    }
}

export default connect(mapStateToProps)(UserInfo);
