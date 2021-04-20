import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BASE_URL } from '../../utils/globalVariable';
import styles from './OrderTable.module.css';
import { setRefresh } from '../../redux/Actions/Refresh.actions';
import { ActivityTwo, Notification } from '..';
import { Thousand } from '../../utils/utilities';

const OrderTable = (props) => {
    const { user, token, refresh, filter } = props;

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [orders, setOrders] = useState({});

    useEffect(() => {
        setLoading(true);
        if (!user.hasOwnProperty('name')) {
            setLoading(false);
            setShow(true);
            setMessage({
                type: 'success',
                message: 'Please sign up and get an account for free.',
                title: 'Unsuccessful'
            });
            return false;
        }
        props.setRefresh(false);
        fetch(`${BASE_URL}/user/getorders/${user._id}`, {
            method: 'GET',
            headers: {
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
                        type: token && user ? 'error' : 'success',
                        title: token && user ? 'Unexpected Error' : 'Unsuccessful',
                        message: token && user ? response.message : 'Please sign up and get an account for free.',
                    })
                }
                
            })
            .catch(err => {
                setLoading(false);
                setShow(true);
                setMessage({
                    type: 'error',
                    title: `Unexpected Error`,
                    message: `Please check your internet connection.`
                });
            })

        return () => {
            setLoading(false);
            setShow(false);
            setOrders({});
            setMessage({});
        }
    }, [refresh]);

    const Delivered = (order, total) => {
        if (order.status === 'On the Way' && order.status !== 'Delivered') {
            fetch(`${BASE_URL}/order/delivered/${order._id}?total=${total}`, {
            method: 'PUT',
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
                    if (response.order.status === 'Delivered') {
                        setShow(true);
                        setMessage({
                            title: 'Success',
                            message: 'Order status updated.'
                        });
                        props.setRefresh(true);
                    };
                }

            })
            .catch(err => {
                setLoading(false);
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.',
                });
            })
        }
    };
    
    
    return (
        <>
             {loading ? <div> <ActivityTwo /> </div> : <>
                {Object.keys(orders)[0] ? Object.values(orders).map((order, index) => (<div className={styles.orderSeparator}>
                    <h1 className={styles.orderListBaker}>Company: {Object.keys(orders)[index]}</h1>
                    {order.filter(order => filter === 'All' ? order.status : order.status === filter).map((order, index) =>
                        <table className={styles.orderTable} key={index}>
                            <thead className={styles.orderTableHeader}>
                                <td className={[styles.orderTableHeaderData, styles.product].join(' ')}>Product</td>
                                <td className={styles.orderTableHeaderData}>Price</td>
                                <td className={styles.orderTableHeaderData}>Discount</td>
                                <td className={[styles.orderTableHeaderData, styles.message].join(' ')}>Message</td>
                                <td className={styles.orderTableHeaderData}>Quantity</td>
                                <td className={styles.orderTableHeaderData}>Total</td>
                            </thead>
                            {order.pastries.map((pastry, index) =>
                                <tr className={styles.orderTableRow} key={index}>
                                    <td className={[styles.orderTableData , styles.orderTableImageContainer].join(' ')}>
                                        <img src={`${BASE_URL}/${pastry.pastryId.image}`} alt="Pastry Name" className={styles.orderTableDataImage} />
                                        <b className={styles.pastryName}>{pastry.pastryId.name.substr(0, 20)}{pastry.pastryId.name.length > 20 && '...'}</b>
                                    </td>
                                    <td className={styles.orderTableData}>{Thousand(pastry.pastryId.price)}</td>
                                    <td className={styles.orderTableData}>{pastry.pastryId.discount}%</td>
                                    <td className={styles.orderTableData}>{pastry.message || "'empty'"}</td>
                                    <td className={styles.orderTableData}>{pastry.quantity}</td>
                                    <td className={styles.orderTableData}>{Thousand(pastry.pastryId.price * pastry.quantity)}</td>
                                </tr>
                            )}
                            <tr className={styles.orderTableRow}>
                                <td colSpan="2" className={[styles.orderTableData, styles.orderCoupon].join(' ')}>
                                    <h3>Status: {order.status}</h3>
                                </td>
                                <td colSpan="2" className={[styles.orderTableData, styles.orderCoupon].join(' ')}>
                                    <button className={styles.orderButton} onClick={() => Delivered(order, order.pastries.reduce((sum, pastry) => sum + (pastry.pastryId.discount ? (((100 - pastry.pastryId.discount)/100) * pastry.pastryId.price * pastry.quantity) : (pastry.pastryId.price * pastry.quantity)), 0))} >Delivered!</button>
                                </td>
                                <td colSpan="2" className={styles.orderTableData}>Totals: {Thousand(order.pastries.reduce((sum, pastry) => sum + (pastry.pastryId.discount ? (((100 - pastry.pastryId.discount)/100) * pastry.pastryId.price * pastry.quantity) : (pastry.pastryId.price * pastry.quantity)), 0))}</td>
                            </tr>
                        </table>
                    )}
                </div >
                )) : <div className={styles.orderSeparator}>
                        <h2 className={styles.title}>No orders placed yet.</h2>
                </div>}
                <Notification setShow={setShow} show={show} message={message} />
            </>}
        </>
    )
}
const mapStateToProps = ({ auth, refresh }) => {
    return {
        token: auth.token,
        user: auth.user,
        refresh: refresh.refresh
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setRefresh }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);