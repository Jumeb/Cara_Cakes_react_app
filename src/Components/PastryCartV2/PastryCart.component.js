import React, { useEffect, useState } from 'react';
import { IoAdd, IoBrush, IoClose, IoRemove, IoStatsChart, IoThumbsDown, IoThumbsUp, IoWallet } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Notification } from '..';
import { BASE_URL } from '../../utils/globalVariable';
import { Thousand } from '../../utils/utilities';
import styles from './PastryCart.module.css';
import { setRefresh } from '../../redux/Actions/Refresh.actions';

const PastryCart = (props) => {
    const { detail, setDetail, pastry, user, refresh, setIsEdit } = props;

    const [loading, setLoading] = useState(false);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    const [pastryMessage, setPastryMessage] = useState('');
    const [message, setMessage] = useState({});

    useEffect(() => {
        props.setRefresh(false);
    }, [refresh]);

    useEffect(() => {
        if (pastry.length !== 0) {
            setLikes(pastry.pastryId.likes.users.length);
            setDislikes(pastry.pastryId.dislikes.users.length);
            setPastryMessage(pastry.message);
            setCount(pastry.quantity);
        }
        return () => {
            setLikes(0);
            setDislikes(0);
            setPastryMessage('');
            setCount(0);
            setShow(false);
            setMessage({});
            setLoading(false);
        }
    }, [detail]);

    const AddToCart = (id) => {
        setLoading(true);
        fetch(`${BASE_URL}/user/addToCart/${id}?user=${user._id}`, {
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
                    setCount(count + 1);
                    props.setRefresh(true);
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
    };

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

                if (statusCode === 200) {
                    setCount(count - 1);
                    props.setRefresh(true);
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
    };
    const Close = () => {
        setDetail(false);
    }

    const EditPastry = (pastry) => {
        setIsEdit(true);
        setDetail(false);
    };

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
                    props.setRefresh(true);
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

    const disLikePastry = (id) => {
        setLoading(true);
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
                    props.setRefresh(true);
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
                    props.setRefresh(true);
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
    };

    const stopClose = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={detail ? styles.notifyBackdrop : styles.notifyNoBackdrop} onClick={() => Close()}>
            <div className={[styles.notifyContainer, detail ? styles.showContainer : styles.hideContainer].join(' ')} onClick={(e) => stopClose(e)}>
                {pastry.length !== 0 &&
                    <>
                    <div className={styles.pastryNameContainer}>
                        <h2 className={styles.pastryName}>{pastry.pastryId.name}</h2>
                        <span onClick={() => Close()} className={styles.pastryClose}><IoClose /></span>
                    </div>
                        <div className={styles.pastryContainer}>
                            {pastry.pastryId.discount > 0 && <div className={styles.pastryDiscount}><IoStatsChart /> Discount: {pastry.pastryId.discount || ''}%</div>}
                            <img src={`${BASE_URL}/${pastry.pastryId.image || ''}`} alt={pastry.price} className={styles.pastryImage} />
                            <div className={styles.pastryLikes} onClick={() => likePastry(pastry.pastryId._id || '')}><IoThumbsUp className={styles.icon} /> Likes: {Thousand(likes)}</div>
                            <div className={styles.pastryDislikes} onClick={() => disLikePastry(pastry.pastryId._id || '')}><IoThumbsDown className={styles.icon} /> Dislikes: {Thousand(dislikes)}</div>
                        </div>
                        <div className={styles.dets}>
                            <h2 className={styles.pastryPrice}>{Thousand(count >= 1 ? count * pastry.pastryId.price : pastry.pastryId.price || 0)} XAF</h2>
                            {count === 0 ?
                                <div className={styles.notifyActions}>
                                    <button className={styles.notifyButton} onClick={() => AddToCart(pastry.pastryId._id || '')}>Add to Cart</button>
                                </div> :
                                <div className={styles.notifyActions}>
                                    <button className={styles.pastryButton} onClick={() => SubFromCart(pastry.pastryId._id || '')}><IoRemove /></button>
                                    <b className={styles.pastryQty}>Quantity: {count || ''}</b>
                                    <button className={styles.pastryButton} onClick={() => AddToCart(pastry.pastryId._id || '')}><IoAdd /></button>
                                </div>
                            }
                        </div>
                        <div>
                            <input type="text" placeholder="Message on pastry" value={pastryMessage || ''} className={styles.pastryMessage} onChange={event => setPastryMessage(event.target.value)} />
                            <button className={styles.notifyButton} onClick={() => Message(pastry.pastryId._id || '')}><IoBrush className={styles.icon} style={{ paddingTop: '3px' }} />Paste</button>
                        </div>
                    </>}
            </div>
            <Notification message={message} show={show} setShow={setShow} />
        </div>
    )
};

const mapStateToProps = ({ auth, refresh }) => {
    return {
        user: auth.user,
        refresh: refresh.refresh,
    }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setRefresh }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PastryCart);