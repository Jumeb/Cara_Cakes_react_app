import React, {useEffect, useState} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ActivityTwo, BakerCard, Notification } from '../../../../Components';
import styles from './BakerList.module.css'
import {BASE_URL} from '../../../../utils/globalVariable';
import {setBakers} from '../../../../redux/Actions/Data.actions';

const BakerList = (props) => {
    const {isDetail, setIsDetail, token, setBaker, refresh} = props;

    const [bakers, setBakers] = useState([]);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // setBaker([1,2]);
        setLoading(true);
        // setIsDetail(false);
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


    return (
        <div className={styles.bakersList}>
            {loading ? <div>
                <ActivityTwo />
            </div> : bakers.map((baker, index) => <BakerCard isDetail={isDetail} _setBaker={setBaker} setIsDetail={setIsDetail} baker={baker} key={index} {...props}/>)}
            <Notification message={message} show={show} setShow={setShow} />
        </div>
    )
}

const mapStateToProps = ({auth, refresh}) => {
    return {
        token: auth.token,
        user: auth.user,
        refresh: refresh.refresh
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setBakers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BakerList);
