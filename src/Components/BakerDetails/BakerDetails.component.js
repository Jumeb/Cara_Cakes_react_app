import React, { useEffect, useState } from 'react';
import { IoClose, IoPeople, IoThumbsDown, IoThumbsUp } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Notification } from '..';
import { BASE_URL } from '../../utils/globalVariable';
import { Thousand } from '../../utils/utilities';
import { setBaker } from '../../redux/Actions/Auth.actions';
import styles from './BakerDetails.module.css';
import { logo5, vals3 } from '../../res/img';
import { setRefresh } from '../../redux/Actions/Refresh.actions';

const BakerDetails = (props) => {
    const { detail, setDetail, baker, user, refresh } = props;

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [followers, setFollowers] = useState(0);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);

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

    useEffect(() => {
        return () => {
            setLikes(0);
            setDislikes(0);
            setFollowers(0);
        }
    }, []);

    useEffect(() => {
        props.setRefresh(false);
    }, [refresh]);

    const Close = () => {
        setDetail(false);
    };


    const disLikeBaker = (id) => {
        if (!user.hasOwnProperty('name')) {
            setShow(true);
            setMessage({
                type: 'success',
                message: `Please create your account to dislike ${baker.companyName}`,
                title: 'Unsuccessful'
            });
            return false;
        }
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
            console.log(err);
        })
    }

    const likeBaker = (id) => {
        if (!user.hasOwnProperty('name')) {
            setShow(true);
            setMessage({
                type: 'success',
                message: `Please create your account to like ${baker.companyName}`,
                title: 'Unsuccessful'
            });
            return false;
        }
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
            if (statusCode === 200) {
                setLikes(response.likes.users.length);
                setDislikes(response.dislikes.users.length);
                props.setRefresh(true);
            }

            if (statusCode === 404) {
                console.log('response')
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
        if (!user.hasOwnProperty('name')) {
            setShow(true);
            setMessage({
                type: 'success',
                message: `Please create your account to follow ${baker.companyName}`,
                title: 'Unsuccessful'
            });
            return false;
        }
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
            if (statusCode === 200) {
                setFollowers(response.followers.users.length);
                props.setRefresh(true);
            }

            if (statusCode === 404) {
                console.log('response')
            }

            if (statusCode === 500) {
                console.log('error 500');
            }
        })
        .catch(err => {
            console.log(err, 'ksjdkfljlsjf');
        })
    }

    const stopClose = (e) => {
        e.stopPropagation();
    }

    const bakerShop = (bakerId) => {
        props.setBaker(bakerId);
        props.history.push({pathname: '/user/shop/pastries'})
    }

    return (
        <div className={detail ? styles.notifyBackdrop : styles.notifyNoBackdrop} onClick={() => Close()}>
            <div className={[styles.notifyContainer, detail ? styles.showContainer : styles.hideContainer].join(' ')} onClick={(event) => stopClose(event)}>
                {baker.length !== 0 && 
                    <>
                    <button className={styles.closeButton} onClick={() => Close()}><IoClose /></button>
                    <div className={styles.bakerContainer}>
                        <div className={styles.pastryContainer}>
                            <div className={styles.pastryDiscount} onClick={() => followBaker(baker._id || '')}><IoPeople className={styles.icon} /> Followers: {Thousand(followers)}</div>
                            <img src={baker.ceoImage ? `${BASE_URL}/${baker.ceoImage}` : vals3} alt={baker.price} className={styles.pastryImage} />
                            <div className={styles.pastryPrice}><img src={baker.companyImage ? `${BASE_URL}/${baker.companyImage}` : logo5} alt="Product" className={styles.bakerListImgLogo}/></div>
                            <div className={styles.pastryLikes} onClick={() => likeBaker(baker._id || '')}><IoThumbsUp className={styles.icon} /> Likes: {Thousand(likes)}</div>
                            <div className={styles.pastryDislikes} onClick={() => disLikeBaker(baker._id || '')}><IoThumbsDown className={styles.icon} /> Dislikes: {Thousand(dislikes)}</div>
                        </div>
                        <div className={styles.bakerDetails}>
                            <h1 className={styles.bakerCompany}>{baker.companyName}</h1>
                            <div className={styles.bakerDetailsScroll}>
                                <b className={styles.bakerCEO}>CEO: <span className={styles.info}>{baker.name}</span></b>
                                <h2 className={styles.subTitle}>Categories</h2>
                                <ol className={styles.bakerCategories}>
                                    {baker.categories.map((category, index) => <li>{category}</li>)}
                                </ol>
                                {user.type === ('Admin') &&
                                    <>
                                        <h2 className={styles.smallDetails}>Email: <span className={styles.info}>{baker.email}</span></h2>
                                        <h2 className={styles.smallDetails}>Telephone: <span className={styles.info}>{baker.telNumber}</span></h2>
                                        <h2 className={styles.smallDetails}>ID No: <span className={styles.info}>{baker.idCardNumber}</span></h2>
                                        <h2 className={styles.smallDetails}>Location: <span className={styles.info}>{baker.location}</span></h2>
                                        <h2 className={styles.smallDetails}>MoMO Number: <span className={styles.info}>{baker.momp}</span></h2>
                                        <h2 className={styles.smallDetails}>MOMO Name : <span className={styles.info}>{baker.momoName}</span></h2>
                                    </>
                                }
                                <h2 className={styles.subTitle}>About</h2>
                                <b className={styles.bakerAbout}>{baker.about || 'empty'}</b>
                            </div>
                            <div className={styles.actions}>
                                {user.type !== 'Baker' && user.type !== 'Admin' && <Button title='Shop' onClick={() => bakerShop(baker._id)} />}
                            </div>
                        </div>
                    </div>
                </>}
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
    return bindActionCreators({setBaker, setRefresh}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BakerDetails);