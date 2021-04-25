import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActivityTwo, Language, Notification, PastryCardV2, PastryFilter, Profile, SearchBar } from '../../../../Components';
import { BASE_URL } from '../../../../utils/globalVariable';
import styles from './PastryList.module.css'
import {setPastries} from '../../../../redux/Actions/Data.actions';
import search from '../../../../utils/search';

const PastryList = (props) => {
    const {
        isDetail,
        setIsDetail,
        setPastry,
        setLikes,
        setDislikes,
        token,
        bakerId,
        refresh,
        _pastries,
    } = props;

    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({});
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState('all');
    const [pastries, setPastries] = useState([]);
    
    const [text, setText] = useState('');

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}/bakerpastries/${bakerId}`, {
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
                    props.setPastries(response.pastries);
                    setPastries(response.pastries);
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
            setLoading(false);
            setPastries([]);
            setMessage({});
            setShow(false);
            setFilter('');
        }
    }, [refresh]);

    useEffect(() => {
        if (filter !== 'all') {
            let Pastries = _pastries.filter(data => data.type === filter);
            setPastries(Pastries);
        }
        if (filter === 'all') {
            setPastries(_pastries);
        }

    }, [filter]);


    useEffect(() => {
        search(text, _pastries, setPastries, 'name');
    }, [text]);

    return (
        <div className={styles.pastriesList}>
            <PastryFilter setFilter={setFilter} {...props} />
            {loading ? <div className={styles.pastriesContainer}>
                <ActivityTwo />
            </div> : <div className={styles.pastriesContainer}>
                {pastries.map((pastry, index) => <PastryCardV2 isDetail={isDetail} setIsDetail={setIsDetail} setPastry={setPastry} setDislike={setDislikes} setLike={setLikes} pastry={pastry} key={index} />)}
            </div>}
            <div className={styles.panelEventHeader}>
                <div className={styles.panelPosition}>
                    <SearchBar setText={setText} />
                    <Language />
                    <Profile />
                </div>
            </div>
            <Notification message={message} show={show} setShow={setShow} />
        </div>
    )
};

const mapStateToProps = ({ auth, refresh, data }) => {
    return {
        token: auth.token,
        user: auth.user,
        bakerId: auth.bakerId,
        refresh: refresh.refresh,
        _pastries: data.pastries,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setPastries}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PastryList);
