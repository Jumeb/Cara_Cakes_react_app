import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IoStatsChart, IoThumbsDown, IoThumbsUp } from 'react-icons/io5';

import styles from './PastryCard.module.css';
import { logo5, vals3 } from '../../res/img';
import { Button } from '..';
import {BASE_URL} from '../../utils/globalVariable';

const PastryCard = (props) => {
    const {
        isDetail, 
        setIsDetail, 
        pastry, 
        setDetail,
        user,
    } = props;

    const [loading, setLoading] = useState(false);
    const [clicked, setClicked] = useState('');
    const [likes, setLikes] = useState(pastry.likes.users.length);
    const [dislikes, setDislikes] = useState(pastry.dislikes.users.length)

    const showDetail = (pastry) => {
        setIsDetail(true);
        setDetail(pastry)
    }

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
            const response = res[1];
            setLoading(false);

            if (statusCode === 200) {
               if (clicked === 'Like') {
                    setClicked('Dislike');
                    setDislikes(dislikes + 1);
                    setLikes(likes - 1);
                } else {
                    setClicked('Dislike');
                    setDislikes(dislikes + 1);
                    if (pastry.likes.users.findIndex(ui => ui.userId === user._id) !== -1) {
                        setLikes(likes - 1);
                    }
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
                    setLikes(likes + 1);
                    setDislikes(dislikes - 1);
                } else {
                    setClicked('Like');
                    setLikes(likes + 1);
                    if (pastry.dislikes.users.findIndex(ui => ui.userId === user._id) !== -1) {
                        setDislikes(dislikes - 1);
                    }
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
                        <h3>Price: {pastry.price} XAF</h3>
                    </div>
                </div>
                <div className={styles.pastriesButtonContainer}>
                    <Button title="Details" onClick={() => showDetail(pastry)} />
                    <Button title="Add to Cart" onClick={() => console.log('added')} />
                </div>
            </div>
    )
}

const mapStateToProps = ({auth}) => {
    return {
        user: auth.user,
    }
}

export default connect(mapStateToProps)(PastryCard);
