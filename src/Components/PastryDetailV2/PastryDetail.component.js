import React, { useEffect, useState } from 'react';
import { IoAdd, IoBrush, IoClose, IoRemove, IoStatsChart, IoThumbsDown, IoThumbsUp, IoWallet } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Notification } from '..';
import { BASE_URL } from '../../utils/globalVariable';
import { Thousand } from '../../utils/utilities';
import styles from './PastryDetail.module.css';
import { setRefresh } from '../../redux/Actions/Refresh.actions';

const PastryDetail = (props) => {
    const {detail, setDetail, pastry, user, refresh, setIsEdit, like, dislike} = props;

    const [loading, setLoading] = useState(false);
    const [likes, setLikes] = useState(like);
    const [dislikes, setDislikes] = useState(dislike);
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    const [pastryMessage, setPastryMessage] = useState('');
    const [message, setMessage] = useState({});

    useEffect(() => {
        props.setRefresh(false);
    }, [refresh]);

    useEffect(() => {
        if(pastry.length !== 0) {
            setLikes(like);
            setDislikes(dislike);
        }
        setCount(0);

        return () => {
            setPastryMessage('');
            setLoading(false);
            setLikes(0);
            setDislikes(0);
            setCount(0);
            setShow(false);
            setMessage({});
        }

    }, [detail]);

    const AddToCart = (id) => {
        setLoading(true);
        if (!user.hasOwnProperty('name')) {
            setShow(true);
            setMessage({
                type: 'success',
                message: `Please create your account to add to cart`,
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

                if (statusCode === 200) {
                    setCount(count - 1);
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
        <div className={detail ? styles.notifyBackdrop : styles.notifyNoBackdrop}  onClick={() => Close()}>
            <div className={[styles.notifyContainer, detail ? styles.showContainer : styles.hideContainer].join(' ')} onClick={(e) => stopClose(e)}>
                <div className={styles.pastryNameContainer}>
                        <h2 className={styles.pastryName}>{pastry.name}</h2>
                        <span onClick={() => Close()} className={styles.pastryClose}><IoClose /></span>
                    </div>
                <div className={styles.pastryContainer}>
                    
                    {pastry.discount > 0 && <div className={styles.pastryDiscount}><IoStatsChart /> Discount: {pastry.discount}%</div>}
                    <img src={`${BASE_URL}/${pastry.image}`} alt={pastry.price} className={styles.pastryImage} />
                    {user.type !== 'Baker' ?
                        <>
                            <div className={styles.pastryDislikes} onClick={() => disLikePastry(pastry._id)}><IoThumbsDown className={styles.icon} /> Dislikes: {Thousand(dislikes)}</div>
                            <div className={styles.pastryLikes} onClick={() => likePastry(pastry._id)}><IoThumbsUp className={styles.icon} /> Likes: {Thousand(likes)}</div>
                        </> :
                        <>
                            <div className={styles.pastryDislikes}><IoThumbsDown className={styles.icon} /> Dislikes: {Thousand(dislikes)}</div>
                            <div className={styles.pastryLikes}><IoThumbsUp className={styles.icon} /> Likes: {Thousand(likes)}</div>
                            {user.type === 'Baker' && <div className={styles.pastryEdit} onClick={() => EditPastry(pastry)}><IoBrush className={styles.icon} /> Edit</div>}
                            <div className={styles.pastryPrice2}><IoThumbsUp className={styles.icon} /> Price: {Thousand(pastry.price || 0)} XAF</div>
                        </>
                    }
                </div>
                 <div className={styles.pastryDetails}>
                   <b className={styles.pastryDescription}>{pastry.description}</b>
                   {/* <h2 className={styles.pastryTitle}>Recipe</h2>
                   <b className={styles.pastryDescription}>{pastry.recipe || 'Loading...'}</b> */}
                </div>
                <div className={styles.dets}>
                    <h2 className={styles.pastryPrice}>{Thousand(count >= 1 ? count * pastry.price : pastry.price || 0)} XAF</h2>
                    {user.type !== 'Baker' && (count === 0 ? 
                        <div className={styles.notifyActions}>
                            <button className={styles.notifyButton} onClick={() => AddToCart(pastry._id)}>Add to Cart</button>
                        </div> :
                        <div className={styles.notifyActions}>
                            <button className={styles.pastryButton} onClick={() => SubFromCart(pastry._id)}><IoRemove /></button>
                            <b className={styles.pastryQty}>Quantity: {count}</b>
                            <button className={styles.pastryButton} onClick={() => AddToCart(pastry._id)}><IoAdd /></button>
                        </div>
                    )}
                </div>
                {count !== 0 && (
                    <div>
                        <input type="text" placeholder="Message on pastry" className={styles.pastryMessage} onChange={event => setPastryMessage(event.target.value)} />
                        <button className={styles.notifyButton} onClick={() => Message(pastry._id)}><IoBrush className={styles.icon} style={{paddingTop: '3px'}} />Paste</button>
                    </div>
                )}
            </div>
            <Notification message={message} show={show} setShow={setShow} />
        </div>
    )
}

const mapStateToProps = ({ auth, refresh }) => {
    return {
        user: auth.user,
        refresh: refresh.refresh,
    }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setRefresh }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PastryDetail);