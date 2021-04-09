import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IoPeople, IoThumbsDown, IoThumbsUp } from 'react-icons/io5';

import { Button, Notification } from '..';
import { logo5, vals3 } from '../../res/img';
import styles from './BakerCard.module.css';
import {setBaker} from '../../redux/Actions/Auth.actions';
import { BASE_URL } from '../../utils/globalVariable';
import { Thousand } from '../../utils/utilities';
import { setCategories } from '../../redux/Actions/Data.actions';

const BakerCard = (props) => {
    const { isDetail, setIsDetail, baker, _setBaker, user } = props;
    
    const [dislikes, setDislikes] = useState(baker.dislikes.users.length);
    const [likes, setLikes] = useState(baker.likes.users.length);
    const [loading, setLoading] = useState(false);
    const [followers, setFollowers] = useState(baker.followers.users.length);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);

    const showDetail = (baker) => {
        _setBaker(baker);
        setIsDetail(true);
    }

    const bakerShop = (baker) => {
        props.setBaker(baker._id);
        props.setCategories(baker.categories);
        props.history.push({ pathname: '/user/shop/pastries' })
    }

    const disLikeBaker = (id) => {
        setLoading(true);
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
                setLoading(false);
                if (statusCode === 200) {
                    setLikes(response.likes.users.length);
                    setDislikes(response.dislikes.users.length);
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
        setLoading(true);
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
                setLoading(false);
                if (statusCode === 200) {
                    setFollowers(response.followers.users.length);
                }

                if (statusCode === 404) {
                    console.log('response');
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
        <div className={styles.bakerListImgContainer}>
            <div className={styles.bakerListTitle}>
                <h2>{baker.companyName}</h2>
            </div>
            <div className={styles.bakerDiscount} onClick={() => followBaker(baker._id || '')}><IoPeople className={styles.icon} /> Followers: {Thousand(followers)}</div>
            <img src={baker.ceoImage ? `${BASE_URL}/${baker.ceoImage}` : vals3} alt={baker.name} className={styles.bakerListImg} />
            <div className={styles.bakerLikes} onClick={() => likeBaker(baker._id || '')}><IoThumbsUp className={styles.icon} /> Likes: {Thousand(likes)}</div>
            <div className={styles.bakerDislikes} onClick={() => disLikeBaker(baker._id || '')}><IoThumbsDown className={styles.icon} /> Dislikes: {Thousand(dislikes)}</div>
            <div className={styles.bakerListImgLogoContainer}>
                <img src={baker.companyImage ? `${BASE_URL}/${baker.companyImage}` : logo5} alt="Product" className={styles.bakerListImgLogo} />
            </div>
            <div className={styles.bakersButtonContainer}>
                <Button onClick={() => showDetail(baker)} title="Details" />
                <Button onClick={() => bakerShop(baker)} title="Shop" />
            </div>
            <Notification message={message} show={show} setShow={setShow} />
        </div>
    )
};

const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setBaker, setCategories}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BakerCard);
