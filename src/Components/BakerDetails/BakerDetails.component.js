import React, { useEffect, useState } from 'react';
import { IoClose, IoPeople, IoThumbsDown, IoThumbsUp } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Notification } from '..';
import { BASE_URL } from '../../utils/globalVariable';
import { Thousand } from '../../utils/utilities';
import { setBaker } from '../../redux/Actions/Auth.actions';
import styles from './BakerDetails.module.css';

const BakerDetails = (props) => {
    const { detail, setDetail, baker, user } = props;
    
    const [loading, setLoading] = useState(false);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [followers, setFollowers] = useState(0);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(false);

    useEffect(() => {
        if (baker.length !== 0) {
            setLikes(baker.likes.users.length);
            setDislikes(baker.dislikes.users.length);
            setFollowers(baker.followers.users.length);
        }
        return () => {
            setLikes(0);
            setDislikes(0);
            setFollowers(0);
        }
    }, [detail]);


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

    const followBaker = (id) => {
        setLoading(true);
        fetch(`${BASE_URL}/baker/follow/${id}?user=${user._id}`, {
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
                setFollowers(response.followers.users.length);
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
                {baker.length !== 0 && 
                    <>
                    <button className={styles.closeButton} onClick={() => setDetail(false)}><IoClose /></button>
                    <div className={styles.bakerContainer}>
                        <div className={styles.pastryContainer}>
                            <div className={styles.pastryDiscount} onClick={() => followBaker(baker._id || '')}><IoPeople className={styles.icon} /> Followers: {Thousand(followers)}</div>
                            <img src={`${BASE_URL}/${baker.image || ''}`} alt={baker.price} className={styles.pastryImage} />
                            <div className={styles.pastryPrice}> </div>
                            <div className={styles.pastryLikes} onClick={() => likeBaker(baker._id || '')}><IoThumbsUp className={styles.icon} /> Likes: {Thousand(likes)}</div>
                            <div className={styles.pastryDislikes} onClick={() => disLikeBaker(baker._id || '')}><IoThumbsDown className={styles.icon} /> Dislikes: {Thousand(dislikes)}</div>
                        </div>
                        <div className={styles.bakerDetails}>
                            <h1 className={styles.bakerCompany}>{baker.companyName}</h1>
                            <b className={styles.bakerCEO}>CEO: <span className={styles.info}>{baker.name}</span></b>
                            <h2 className={styles.subTitle}>About</h2>
                            <b className={styles.bakerAbout}>{baker.about || 'empty'}</b>
                            <div className={styles.actions}>
                                {user.type === 'Admin' && <Button title='Delete' danger={true} onClick={() => console.log('haha')} />}
                                <Button title='Shop' onClick={() => bakerShop(baker._id)} />
                            </div>
                        </div>
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
    return bindActionCreators({setBaker}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BakerDetails);