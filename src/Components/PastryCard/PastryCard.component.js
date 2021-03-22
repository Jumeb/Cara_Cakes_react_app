import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IoStatsChart, IoThumbsDown, IoThumbsUp } from 'react-icons/io5';

import styles from './PastryCard.module.css';
import { logo5, vals3 } from '../../res/img';
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
    } = props;

    const [loading, setLoading] = useState(false);
    const [clicked, setClicked] = useState('');
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [likes, setLikes] = useState(pastry.likes.users.length);
    const [dislikes, setDislikes] = useState(pastry.dislikes.users.length);
    const [detail, setDetails] = useState(false);

    const showDetail = (pastry) => {
        setIsDetail(true);
        setPastry(pastry);
        setDetails(true);
    }

    const disLikePastry = (id) => {
        setLoading(true);
        const userIndex = pastry.likes.users.findIndex(ui => {
            return ui.userId.toString() === user._id.toString();
        });
        const _userIndex = pastry.dislikes.users.findIndex(ui => {
            return ui.userId.toString() === user._id.toString();
        })
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
            const response = res[1];
            setLoading(false);

            if (statusCode === 200) {
                if (clicked === 'Like') {
                    setClicked('Dislike');
                    setDislikes(pastry.dislikes.users.length + 1);
                    setLikes(pastry.likes.users.length);
                }
                if(clicked === 'Dislike') {
                    setClicked('');
                    setDislikes(dislikes - 1);
                }
                if (clicked === '') {
                    setClicked('Dislike');
                    if(_userIndex !== -1) {
                        setDislikes(pastry.dislikes.users.length);
                    }
                    if(userIndex !== -1) {
                        setLikes(pastry.likes.users.length);
                    }
                    setDislikes(dislikes + 1);
                }
            }

            if (statusCode === 500) {
                console.log('error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    const likePastry = (id) => {
        setLoading(true);
        const userIndex = pastry.likes.users.findIndex(ui => {
            return ui.userId.toString() === user._id.toString();
        });
        const _userIndex = pastry.dislikes.users.findIndex(ui => {
            return ui.userId.toString() === user._id.toString();
        })
        console.log(userIndex, 'userIndex');
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
            const response = res[1];
            setLoading(false);

            if (statusCode === 200) {
                if (clicked === 'Dislike') {
                    setClicked('Like');
                    setLikes(pastry.likes.users.length + 1);
                    setDislikes(pastry.dislikes.users.length);
                }
                if (clicked === 'Like') {
                    setClicked('');
                    setLikes(likes - 1);
                }
                if (clicked === '') {
                    setClicked('Like');
                    if(_userIndex !== -1) {
                        setDislikes(pastry.dislikes.users.length);
                    }
                    if(userIndex !== -1) {
                        setLikes(pastry.likes.users.length);
                    }
                    setLikes(likes + 1);
                }
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
                setShow(true);
                setMessage({
                    type: 'success',
                    message: `${pastry.name} added to cart.`,
                    title: 'Success'
                });
            }

            if(statusCode === 422) {
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

    return (
        <>
            <div className={styles.pastryListImgContainer}>
                <h2 className={styles.pastryTitle}>{pastry.name}</h2>
                <div className={styles.pastryImgContainer}>
                    {pastry.discount > 0 && <div className={styles.pastryDiscount}><IoStatsChart /> Discount: {pastry.discount}%</div>}
                    <img src={pastry.image ? `${BASE_URL}/${pastry.image}` : vals3} alt="Product" className={styles.pastryListImg} />
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
}

const mapStateToProps = ({auth}) => {
    return {
        user: auth.user,
    }
}

export default connect(mapStateToProps)(PastryCard);
