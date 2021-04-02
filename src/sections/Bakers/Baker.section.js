import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActivityTwo, BakerDetails, BakerTable, Notification} from '../../Components';
import { BASE_URL } from '../../utils/globalVariable';
import styles from './Baker.module.css';
import { setBakers } from '../../redux/Actions/Data.actions';
import { setRefresh } from '../../redux/Actions/Refresh.actions';

const Bakers = (props) => {
    const {user, token, refresh, _bakers} = props;

    const [bakers, setBakers] = useState([]);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [baker, setBaker] = useState([]);
    const [detail, setDetail] = useState(false);
    const [active, setActive] = useState(0);

    useEffect(() => {
        props.setRefresh(false);
    }, [refresh]);

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}/rawbakers`, {
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
                setBakers(response.bakers);
                props.setBakers(response.bakers);
                setActive(0);
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

            if(statusCode === 500) {
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: response.message,
                })
            }
        })
        .catch(err => {
                setLoading(false);
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.'
                })
        })
        
        return () => {
            setDetail(false);
            setBakers([]);
            setMessage({});
            setShow(false);
            setLoading(false);
            setTotal(0);
        }

    }, [refresh]);

    const setFilter = (index, type) => {
        setActive(index);

        if (type === 'Verified') {
            let _baker = _bakers.filter(data => data.verify);
            setBakers(_baker);
        }
        if (type === 'Suspended') {
            let _baker = _bakers.filter(data => !data.suspend);
            setBakers(_baker);
        }
        if (type === 'Unverified') {
            let _baker = _bakers.filter(data => !data.verify);
            setBakers(_baker);
        }
        if (type === 'Unsuspended') {
            let _baker = _bakers.filter(data => data.suspend);
            setBakers(_baker);
        }
        if (type === 'all') {
            setBakers(_bakers);
        }
    }

    return(
       <div className={styles.bakerSection}>
           <div className={styles.bakerLength}>
               <h2 className={styles.bakerLengthTitle}>{bakers.length} Baker{bakers.length !== 1 && 's'}</h2>
           </div>
           <div className={styles.bakerCat}>
               <button className={[styles.bakerChoice, active === 0 && styles.bakerActive].join(' ')}  onClick={() => setFilter(0, 'all')}>All Bakers</button>
               <button className={[styles.bakerChoice, active === 1 && styles.bakerActive].join(' ')}  onClick={() => setFilter(1, 'Verified')}>Verified</button>
               <button className={[styles.bakerChoice, active === 2 && styles.bakerActive].join(' ')}  onClick={() => setFilter(2, 'Suspended')}>Not Suspended</button>
               <button className={[styles.bakerChoice, active === 3 && styles.bakerActive].join(' ')}  onClick={() => setFilter(3, 'Unverified')}>Unverified</button>
               <button className={[styles.bakerChoice, active === 4 && styles.bakerActive].join(' ')}  onClick={() => setFilter(4, 'Unsuspended')}>Suspended</button>
               <button className={[styles.bakerChoice, active === 5 && styles.bakerActive].join(' ')}  onClick={() => setFilter(5, 'all')}>Add Baker</button>
           </div>
            {loading ? <div className={styles.activity}>
                <ActivityTwo />
               </div> : <BakerTable bakers={bakers} token={token} setBaker={setBaker} setDetail={setDetail} />}
           <Notification show={show} setShow={setShow} message={message} />
            <BakerDetails detail={detail} setDetail={setDetail} baker={baker} />
       </div>
    )
}

const mapStateToProps = ({auth, refresh, data}) => {
    return {
        user: auth.user,
        token: auth.token,
        refresh: refresh.refresh,
        _bakers: data.bakers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setBakers, setRefresh}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Bakers);