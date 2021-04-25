import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IoStatsChart, IoThumbsDown, IoThumbsUp } from 'react-icons/io5';

import styles from './PastryCard.module.css';
import { HouseLogo } from '../../res/img';
import { Notification } from '..';
import {BASE_URL} from '../../utils/globalVariable';
import { Thousand } from '../../utils/utilities';

const PastryCard = (props) => {
    const {
        setIsDetail,
        setLike,
        setDislike,
        pastry,
        setPastry,
        user,
    } = props;

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [likes, setLikes] = useState(pastry.likes.users.length);
    const [dislikes, setDislikes] = useState(pastry.dislikes.users.length);
    const [detail, setDetails] = useState(false);

    const showDetail = (pastry, likes, dislikes) => {
        setIsDetail(true);
        setPastry(pastry);
        setLike(likes);
        setDislike(dislikes);
    }

    const disLikePastry = (id) => {
        setLoading(true);
        if (!user.hasOwnProperty('name')) {
            setShow(true);
            setMessage({
                type: 'success',
                message: `Please create your account to dislike ${pastry.name}`,
                title: 'Unsuccessful'
            });
            return false;
        }
        fetch(`${BASE_URL}/pastry/dislike/${id}?user=${user._id}`, {
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
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.'
                })
            })
    };

    const likePastry = (id) => {
        setLoading(true);
        if (!user.hasOwnProperty('name')) {
            setShow(true);
            setMessage({
                type: 'success',
                message: `Please create your account to like ${pastry.name}`,
                title: 'Unsuccessful'
            });
            return false;
        }
        fetch(`${BASE_URL}/pastry/like/${id}?user=${user._id}`, {
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
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.'
                })
            })
    }

    const AddToCart = (id) => {
        setLoading(true);
        if (!user.hasOwnProperty('name')) {
            setShow(true);
            setMessage({
                type: 'success',
                message: 'Please create your account to add to cart',
                title: 'Unsuccessful'
            });
            return false;
        }
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
                if (statusCode === 200) {
                    setShow(true);
                    setMessage({
                        type: 'success',
                        message: `${pastry.name} added to cart.`,
                        title: 'Success'
                    });
                }

                if (statusCode === 422) {
                    setShow(true);
                    setMessage({
                        type: 'error',
                        message: `${pastry.name} not added to cart.`,
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

    useEffect(() => {
        return () => {
            setLoading(false);
            setShow(false);
            setDetails(false);
            setMessage({});
        }
    }, []);

    return (
        <>
            <div className={styles.pastryListImgContainer}>
                <div className={styles.pastryImgContainer}>
                    {pastry.discount > 0 && <div className={styles.pastryDiscount}><IoStatsChart /> Discount: {pastry.discount}%</div>}
                    <img src={pastry.image ? `${BASE_URL}/${pastry.image}` : HouseLogo} alt="Product" className={styles.pastryListImg} onClick={() => showDetail(pastry, likes, dislikes)} />
                    <div className={styles.pastryDislikes} onClick={() => disLikePastry(pastry._id)}><IoThumbsDown className={styles.icon} /> Dislikes: {Thousand(dislikes)}</div>
                    <div className={styles.pastryLikes} onClick={() => likePastry(pastry._id)}><IoThumbsUp className={styles.icon} /> Likes: {Thousand(likes)}</div>
                </div>
                <div className={styles.pastriesButtonContainer}>
                    <h2 className={styles.pastryName}>{pastry.name.substr(0, 15)}{pastry.name.length > 15 && '...'}</h2>
                    <h3 className={styles.pastryPrice}>From <span className={styles.pastryValue}>{Thousand(pastry.price)} XAF</span></h3>
                </div>
            </div>
            <Notification message={message} show={show} setShow={setShow} />
        </>
    )
};

const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user,
    }
};

export default connect(mapStateToProps)(PastryCard);
