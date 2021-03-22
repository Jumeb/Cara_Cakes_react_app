import React, { useEffect, useState } from 'react';
import { IoAdd, IoBrush, IoClose, IoRemove, IoStatsChart, IoThumbsDown, IoThumbsUp, IoWallet } from 'react-icons/io5';
import { connect } from 'react-redux';
import { Notification } from '..';

import { BASE_URL } from '../../utils/globalVariable';
import { Thousand } from '../../utils/utilities';
import styles from './PastryDetail.module.css';

const PastryDetail = (props) => {
    const {detail, setDetail, pastry, onClick, user} = props;

    const [clicked, setClicked] = useState('');
    const [loading, setLoading] = useState(false);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    const [pastryMessage, setPastryMessage] = useState('');
    const [message, setMessage] = useState(false);

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
                        message: `${pastry.name} added to cart`,
                        title: 'Success'
                    });
                }
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
        if(pastry.length !== 0) {
            setLikes(pastry.likes.users.length);
            setDislikes(pastry.dislikes.users.length);
        }
        setCount(pastry.quantity);
    }, [detail]);

    const Message = (id) => {
        fetch(`${BASE_URL}/user/message/${id}?user=${user._id}&message=${pastryMessage}`, {
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
               setShow(true);
                setMessage({
                    type: 'success',
                    message: `${pastryMessage} added for pastry.`,
                    title: 'Success'
                });
            }

            if (statusCode === 500) {
                console.log('error');
            }
        })
        .catch(err => {
            console.log(err);
        })
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

    return (
        <div className={detail ? styles.notifyBackdrop : styles.notifyNoBackdrop}>
            <div className={[styles.notifyContainer, detail ? styles.showContainer : styles.hideContainer].join(' ')}>
                <button className={styles.closeButton} onClick={() => setDetail(false)}><IoClose /></button>
                <div className={styles.pastryContainer}>
                    {pastry.discount > 0 && <div className={styles.pastryDiscount}><IoStatsChart /> Discount: {pastry.discount}%</div>}
                    <div className={styles.pastryName}>{pastry.name}</div>
                    <img src={`${BASE_URL}/${pastry.image}`} alt={pastry.price} className={styles.pastryImage} />
                    <div className={styles.pastryPrice}><IoWallet className={styles.icon} /> Price: {Thousand(count >= 1 ? count * pastry.price : pastry.price || 0)} XAF</div>
                    <div className={styles.pastryLikes} onClick={() => likePastry(pastry._id)}><IoThumbsUp className={styles.icon} /> Likes: {Thousand(likes)}</div>
                    <div className={styles.pastryDislikes} onClick={() => disLikePastry(pastry._id)}><IoThumbsDown className={styles.icon} /> Dislikes: {Thousand(dislikes)}</div>
                </div>
                    {count === 0 ? 
                        <div className={styles.notifyActions}>
                            <button className={styles.notifyButton} onClick={() => AddToCart(pastry._id)}>Add to Cart</button>
                        </div> :
                        <div className={styles.notifyActions}>
                            <button className={styles.pastryButton} onClick={() => SubFromCart(pastry._id)}><IoRemove /></button>
                            <b className={styles.pastryQty}>Quantity: {count}</b>
                            <button className={styles.pastryButton} onClick={() => AddToCart(pastry._id)}><IoAdd /></button>
                        </div>
                    }
                {count !== 0 && (
                    <div>
                        <input type="text" placeholder="Message on pastry" className={styles.pastryMessage} onChange={event => setPastryMessage(event.target.value)} />
                        <button className={styles.notifyButton} onClick={() => Message(pastry._id)}><IoBrush className={styles.icon} style={{paddingTop: '3px'}} />Paste</button>
                    </div>
                )}
                <div className={styles.pastryDetails}>
                   <h2 className={styles.pastryTitle}>Type: {pastry.type}</h2>
                   <h2 className={styles.pastryTitle}>About</h2>
                   <b className={styles.pastryDescription}>{pastry.description}</b>
                   <h2 className={styles.pastryTitle}>Recipe</h2>
                   <b className={styles.pastryDescription}>{pastry.recipe || 'Loading...'}</b>
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