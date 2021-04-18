import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IoStatsChart, IoThumbsDown, IoThumbsUp } from 'react-icons/io5';

import styles from './PastryCard.module.css';
import { HouseLogo, logo5, vals3 } from '../../res/img';
import { Button, Notification, PastryDetail } from '..';
import {BASE_URL} from '../../utils/globalVariable';
import { Thousand } from '../../utils/utilities';

const PastryCard = (props) => {
    const {
        isDetail,
        setIsDetail,
        pastry,
        setPastry,
        user,
        filter,
    } = props;

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [likes, setLikes] = useState(pastry.likes.users.length);
    const [dislikes, setDislikes] = useState(pastry.dislikes.users.length);
    const [detail, setDetails] = useState(false);

    const showDetail = (pastry) => {
        setIsDetail(true);
        setPastry(pastry);
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
                <h2 className={styles.pastryTitle}>{pastry.name}</h2>
                <div className={styles.pastryImgContainer}>
                    {pastry.discount > 0 && <div className={styles.pastryDiscount}><IoStatsChart /> Discount: {pastry.discount}%</div>}
                    <img src={pastry.image ? `${BASE_URL}/${pastry.image}` : HouseLogo} alt="Product" className={styles.pastryListImg} />
                    <div className={styles.pastryStats}>
                        <div className={styles.pastryLikes}>
                            <div className={styles.likeData} onClick={() => likePastry(pastry._id)}><IoThumbsUp /> {likes} </div>
                            <div className={styles.likeData} onClick={() => disLikePastry(pastry._id)}><IoThumbsDown /> {dislikes} </div>
                        </div>
                        <h3>Price: {Thousand(pastry.price)} XAF</h3>
                    </div>
                </div>
                <div className={styles.pastriesButtonContainer}>
                    <Button title="Details" onClick={() => showDetail(pastry)} />
                    <Button title="Add to Cart" onClick={() => AddToCart(pastry._id)} />
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
