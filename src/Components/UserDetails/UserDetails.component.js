import React, { useEffect, useState } from 'react';
import { IoClose, IoPeople, IoThumbsDown, IoThumbsUp } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Notification } from '..';
import { BASE_URL } from '../../utils/globalVariable';
import { Thousand, HNumber } from '../../utils/utilities';
import { setBaker } from '../../redux/Actions/Auth.actions';
import styles from './UserDetails.module.css';
import { logo5, vals3 } from '../../res/img';
import { setRefresh } from '../../redux/Actions/Refresh.actions';

const UserDetails = (props) => {
    const { detail, setDetail, _user, user } = props;
    
    const [loading, setLoading] = useState(false);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(false);

    useEffect(() => {
        if (_user.length !== 0) {
            setLikes(_user.likes.users.length);
            setDislikes(_user.dislikes.users.length);
        }
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


    const disLikeBaker = (id) => {
        setLoading(true);
        fetch(`${BASE_URL}/baker/dislike/${id}?user=${user._id}`, {
            method: 'POST',
        })
        .then(res => {
            const statusCode = res.status;
            const response = res.json();
            return Promise.all([statusCode, response]);
        })
        .then(res => {
            const statusCode = res[0];
            const response = res[1].baker;
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

    const likeBaker = (id) => {
        setLoading(true);
        fetch(`${BASE_URL}/baker/like/${id}?user=${user._id}`, {
            method: 'POST',
        })
        .then(res => {
            const statusCode = res.status;
            const response = res.json();
            return Promise.all([statusCode, response]);
        })
        .then(res => {
            const statusCode = res[0];
            const response = res[1].baker;
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

    const bakerShop = (bakerId) => {
        props.setBaker(bakerId);
        props.history.push({pathname: '/user/shop/pastries'})
    }

    return (
        <div className={detail ? styles.notifyBackdrop : styles.notifyNoBackdrop}>
            <div className={[styles.notifyContainer, detail ? styles.showContainer : styles.hideContainer].join(' ')}>
                {_user.length !== 0 && 
                    <>
                    <button className={styles.closeButton} onClick={() => Close()}><IoClose /></button>
                    <div className={styles.bakerContainer}>
                        <div className={styles.pastryContainer}>
                            <div className={styles.pastryDiscount}> {HNumber(_user.telNumber)}</div>
                            <div className={styles.pastryName}>{_user.name || ''}</div>
                            <img src={_user.image ? `${BASE_URL}/${_user.image}` : vals3} alt={_user.price} className={styles.pastryImage} />
                            <div className={styles.pastryLikes} onClick={() => likeBaker(_user._id || '')}><IoThumbsUp className={styles.icon} /> Likes: {Thousand(likes)}</div>
                            <div className={styles.pastryDislikes} onClick={() => disLikeBaker(_user._id || '')}><IoThumbsDown className={styles.icon} /> Dislikes: {Thousand(dislikes)}</div>
                        </div>
                        {/* <div className={styles.bakerDetails}>
                            <h1 className={styles.bakerCompany}>{_user.name}</h1>
                            <div className={styles.bakerDetailsScroll}>
                                <b className={styles.bakerCEO}>N: <span className={styles.info}>{_user.name}</span></b>
                                <h2 className={styles.subTitle}>Categories</h2>
                                {user.type === 'Baker' &&
                                    <>
                                        <h2 className={styles.smallDetails}>Email: <span className={styles.info}>{_user.email}</span></h2>
                                        <h2 className={styles.smallDetails}>Telephone: <span className={styles.info}>{_user.telNumber}</span></h2>
                                        <h2 className={styles.smallDetails}>ID No: <span className={styles.info}>{_user.idCardNumber}</span></h2>
                                        <h2 className={styles.smallDetails}>Location: <span className={styles.info}>{_user.location}</span></h2>
                                        <h2 className={styles.smallDetails}>MoMO Number: <span className={styles.info}>{_user.momp}</span></h2>
                                        <h2 className={styles.smallDetails}>MOMO Name : <span className={styles.info}>{_user.momoName}</span></h2>
                                    </>
                                }
                                <h2 className={styles.subTitle}>About</h2>
                                <b className={styles.bakerAbout}>{_user.about || 'empty'}</b>
                            </div>
                            <div className={styles.actions}>
                                {user.type !== ('Baker' || 'Admin') && <Button title='Shop' onClick={() => bakerShop(_user._id)} />}
                            </div>
                        </div> */}
                    </div>
                </>}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);