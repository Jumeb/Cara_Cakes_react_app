import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActivityTwo, BakerDetails, BakerTable, Notification} from '../../Components';
import { BASE_URL } from '../../utils/globalVariable';
import styles from './Baker.module.css';
import { setBakers } from '../../redux/Actions/Data.actions';
import { setRefresh } from '../../redux/Actions/Refresh.actions';

const Bakers = (props) => {
    const {user, token, refresh} = props;

    const [bakers, setBakers] = useState([]);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [baker, setBaker] = useState([]);
    const [detail, setDetail] = useState(false);

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

    return(
       <div className={styles.bakerSection}>
           <div className={styles.bakerLength}>
               <h2 className={styles.bakerLengthTitle}>{total} Baker{total !== 1 && 's'}</h2>
           </div>
           <div className={styles.bakerCat}>
               <button className={styles.bakerChoice}>All Bakers</button>
               <button className={styles.bakerChoice}>New Bakers</button>
               <button className={styles.bakerChoice}>Verified</button>
               <button className={styles.bakerChoice}>Suspended</button>
               <button className={styles.bakerChoice}>Add Baker</button>
           </div>
            {loading ? <div className={styles.activity}>
                <ActivityTwo />
               </div> : <BakerTable bakers={bakers} token={token} setBaker={setBaker} setDetail={setDetail} />}
           <Notification show={show} setShow={setShow} message={message} />
            <BakerDetails detail={detail} setDetail={setDetail} baker={baker} />
       </div>
    )
}

const mapStateToProps = ({auth, refresh}) => {
    return {
        user: auth.user,
        token: auth.token,
        refresh: refresh.refresh,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setBakers, setRefresh}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Bakers);