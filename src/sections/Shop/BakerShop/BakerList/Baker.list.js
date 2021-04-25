import React, {useEffect, useState} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ActivityTwo, BakerCard, Language, Notification, Profile, SearchBar } from '../../../../Components';
import styles from './BakerList.module.css'
import {BASE_URL} from '../../../../utils/globalVariable';
import {setBakers} from '../../../../redux/Actions/Data.actions';
import search from '../../../../utils/search';

const BakerList = (props) => {
    const { isDetail, setIsDetail, token, setBaker, refresh, _bakers, setLikes, setDislikes, setFollow } = props;

    const [bakers, setBakers] = useState([]);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}/bakers`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${token}`,
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
                    props.setBakers(response.bakers);
                    setBakers(response.bakers);
                    setTotal(response.totalItems);
                }
                if (statusCode === 404) {
                    setShow(true);
                    setMessage({
                        type: 'error',
                        title: 'Unexpected Error',
                        message: response.message,
                    })
                }

                if (statusCode === 500) {
                    setShow(true);
                    setMessage({
                        type: 'error',
                        title: 'Unexpected Error',
                        message: response.message,
                    })
                }
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.'
                })
            })

        return () => {
            setTotal(0)
            setLoading(false);
            setShow(false);
            setMessage({});
            setBakers([]);
        }

    }, [refresh]);

    useEffect(() => {
        search(text, _bakers, setBakers, 'companyName');
    }, [text])


    return (
        <div className={styles.bakersList}>
            {loading ? <div className={styles.bakersContainer}>
                <ActivityTwo />
            </div> : <div className={styles.bakersContainer}> {bakers.map((baker, index) => <BakerCard isDetail={isDetail} _setBaker={setBaker} setIsDetail={setIsDetail} setDislike={setDislikes} setLike={setLikes} setFollow={setFollow} baker={baker} key={index} {...props} />)}</div>}
            <Notification message={message} show={show} setShow={setShow} />
            <div className={styles.panelEventHeader}>
                <div className={styles.panelPosition}>
                    <SearchBar setText={setText} />
                    <Language />
                    <Profile />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({auth, refresh, data}) => {
    return {
        token: auth.token,
        user: auth.user,
        refresh: refresh.refresh,
        _bakers: data.bakers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setBakers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BakerList);
