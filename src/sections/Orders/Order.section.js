import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActivityTwo, AOrderTable } from '../../Components';
import styles from './Order.module.css';
import { setRefresh } from '../../redux/Actions/Refresh.actions';
import { BASE_URL } from '../../utils/globalVariable';

const Orders = (props) => {
    const { user, token, refresh } = props;

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({});
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/baker/getorders/${user._id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json',
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
                    setOrders(response.orders);
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
                setLoading(false);
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.'
                })
            })
        
        return () => {
            setOrders([]);
            setShow(false);
            setLoading(false);
            setMessage({});
        }
    }, [refresh]);

    return(
       <div className={styles.bakerSection}>
           <div className={styles.bakerLength}>
               <h2 className={styles.bakerLengthTitle}>{orders.length} Order{orders.length !== 1 && 's'}</h2>
           </div>
           <div className={styles.bakerCat}>
               <button className={styles.bakerChoice}>All Orders</button>
               <button className={styles.bakerChoice}>New</button>
               <button className={styles.bakerChoice}>Registered</button>
               <button className={styles.bakerChoice}>Processing</button>
               <button className={styles.bakerChoice}>On the Way</button>
               <button className={styles.bakerChoice}>Delivered</button>
           </div>
           {loading ? <div className={styles.activity}>
                <ActivityTwo />
               </div> :<AOrderTable orders={orders} token={token} />}
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
    return bindActionCreators({setRefresh}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);