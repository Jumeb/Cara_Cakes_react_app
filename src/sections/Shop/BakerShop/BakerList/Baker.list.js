import React, {useEffect, useState} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { BakerCard, Notification } from '../../../../Components';
import styles from './BakerList.module.css'
import {BASE_URL} from '../../../../utils/globalVariable';
import {setBakers} from '../../../../redux/Actions/Data.actions';

const BakerList = (props) => {
    const {isDetail, setIsDetail, token, setDetail} = props;

    const [bakers, setBakers] = useState([]);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setLoading(true);
        setIsDetail(false);
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

    }, []);


    return (
        <div className={isDetail ? styles.bakersListDetail : styles.bakersList}>
            {bakers.map((baker, index) => <BakerCard isDetail={isDetail} setIsDetail={setIsDetail} setDetail={setDetail} baker={baker} {...props} key={index} />)}
            <Notification message={message} show={show} setShow={setShow} />
        </div>
    )
}

const mapStateToProps = ({auth}) => {
    return {
        token: auth.token,
        user: auth.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setBakers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BakerList);
