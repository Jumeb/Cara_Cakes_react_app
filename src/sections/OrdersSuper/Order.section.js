import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActivityTwo, OrderDetails, SOrdersTable } from '../../Components';
import styles from './Order.module.css';
import { setRefresh } from '../../redux/Actions/Refresh.actions';
import { setOrders } from '../../redux/Actions/Data.actions';
import { BASE_URL } from '../../utils/globalVariable';
import { data } from 'jquery';

const Orders = (props) => {
    const { user, token, refresh, _orders } = props;

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({});
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState([]);
    const [detail, setDetail] = useState(false);
    const [active, setActive] = useState(0);

    useEffect(() => {
        fetch(`${BASE_URL}/baker/getallorders`, {
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
                    setActive(0);
                    props.setOrders(response.orders);
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

        }
    }, []);

    const setFilter = (index, type) => {
        setActive(index);
        console.log(_orders, 'hhahahah');

        if (type !== 'all') {
            let _order = _orders.filter(data => data.status === type);
            setOrders(_order);
        }
        if (type === 'all') {
            setOrders(_orders);
        }
    }

    return (
        <div className={styles.bakerSection}>
            <div className={styles.bakerLength}>
                <h2 className={styles.bakerLengthTitle}>{orders.length} Order{orders.length !== 1 && 's'}</h2>
            </div>
            <div className={styles.bakerScroll}>
                <div className={styles.bakerCat}>
                    <button className={[styles.bakerChoice, active === 0 && styles.bakerActive].join(' ')} onClick={() => setFilter(0, 'all')}>All Orders</button>
                    <button className={[styles.bakerChoice, active === 1 && styles.bakerActive].join(' ')} onClick={() => setFilter(1, 'New')}>New</button>
                    <button className={[styles.bakerChoice, active === 2 && styles.bakerActive].join(' ')} onClick={() => setFilter(2, 'Registered')}>Registered</button>
                    <button className={[styles.bakerChoice, active === 3 && styles.bakerActive].join(' ')} onClick={() => setFilter(3, 'Processing')}>Processing</button>
                    <button className={[styles.bakerChoice, active === 4 && styles.bakerActive].join(' ')} onClick={() => setFilter(4, 'On the Way')}>On the Way</button>
                    <button className={[styles.bakerChoice, active === 5 && styles.bakerActive].join(' ')} onClick={() => setFilter(5, 'Delivered')}>Delivered</button>
                    <button className={[styles.bakerChoice, active === 6 && styles.bakerActive].join(' ')} onClick={() => setFilter(6, 'Confirmed')}>Delivered</button>
                </div>
            </div>
            {loading ? <div className={styles.activity}>
                <ActivityTwo />
            </div> : <SOrdersTable orders={orders} token={token} setOrder={setOrder} setDetail={setDetail} />}
            <OrderDetails detail={detail} setDetail={setDetail} order={order} />
        </div>
    )
};

const mapStateToProps = ({auth, refresh, data}) => {
    return {
        user: auth.user,
        token: auth.token,
        refresh: refresh.refresh,
        _orders: data.orders,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setRefresh, setOrders }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);