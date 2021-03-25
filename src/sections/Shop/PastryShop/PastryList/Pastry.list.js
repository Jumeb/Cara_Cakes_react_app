import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Notification, PastryCard, PastryDetail } from '../../../../Components';
import { BASE_URL } from '../../../../utils/globalVariable';
import styles from './PastryList.module.css'
import {setPastries} from '../../../../redux/Actions/Data.actions';

const PastryList = (props) => {
    const {
        isDetail, 
        setIsDetail, 
        setPastry,
        token,
        bakerId
    } = props;

    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({});
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [pastries, setPastries] = useState([]);

    useEffect(() => {
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

            if(statusCode === 200) {
                props.setPastries(response.pastries);
                setPastries(response.pastries);
                setTotal(response.totalItems);
            }

            if(statusCode === 404) {
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
            setTotal(0);
        }
    }, [])

    return (
        <div className={styles.pastriesList}>
            {pastries.map((pastry, index) => <PastryCard isDetail={isDetail} setIsDetail={setIsDetail} setPastry={setPastry} pastry={pastry} key={index} /> )}
            <Notification message={message} show={show} setShow={setShow} />
        </div>
    )
}

const mapStateToProps = ({auth}) => {
    return {
        token: auth.token,
        user: auth.user,
        bakerId: auth.bakerId
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setPastries}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PastryList);
