import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { pans2 } from '../../res/img';
import { DateString, Thousand } from '../../utils/utilities';
import styles from './OrderTable.module.css';
import { setRefresh } from '../../redux/Actions/Refresh.actions';
import { BASE_URL } from '../../utils/globalVariable';
import { Notification, OrderDetails } from '..';
import { IoTrashBinSharp } from 'react-icons/io5';

const OrderTable = (props) => { 
    const { orders, token, refresh, setDetail, setOrder } = props;

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({});

    useEffect(() => {
        props.setRefresh(false);
        
        return () => {
            setLoading(false);
            setShow(false);
            setMessage({});
        }
    }, [refresh]);
    
    const IncStatus = (order, total) => {
        if (order.status !== 'On the Way' && order.status !== 'Confirmed') {
            setLoading(true);
            fetch(`${BASE_URL}/order/status/${order._id}?total=${total}`, {
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
                        setShow(true);
                        setMessage({
                            title: 'Success',
                            message: 'Order status updated.'
                        });
                        props.setRefresh(true);
                    }
    
                })
                .catch(err => {
                    console.log(err);
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

    const OrderDetails = (order) => {
        setOrder(order);
        setDetail(true);
    }


    return (
            <div className={styles.cartSeparator}>
                <table className={styles.cartTable}>
                    <thead className={styles.cartTableHeader}>
                        <td className={styles.cartTableHeaderData}>Client Name</td>
                        <td className={styles.cartTableHeaderData}>Suspended</td>
                        <td className={styles.cartTableHeaderData}>Status</td>
                        <td className={styles.cartTableHeaderData}>Total</td>
                        <td className={styles.cartTableHeaderData}>Date</td>
                        <td className={styles.cartTableHeaderData}>Actions</td>
                    </thead>
                    {orders.map((order, index) => 
                        <tr className={styles.cartTableRow}>
                            <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                                <img src={order.userId.image ? `${BASE_URL}/${order.userId.image}` : pans2} alt={order.userId.name} className={styles.cartTableDataImage} />
                                <b>{order.userId.name.substr(0, 15)}</b>
                            </td>
                            <td className={styles.cartTableData}>{order.userId.suspend ? "True" : "False"}</td>
                            <td className={styles.cartTableData}>{order.status}</td>
                            <td className={styles.cartTableData}>{Thousand(order.pastries.reduce((sum, pastry) => sum + (pastry.pastryId.discount ? (((100 - pastry.pastryId.discount)/100) * pastry.pastryId.price * pastry.quantity) : (pastry.pastryId.price * pastry.quantity)), 0))}</td>
                            <td className={styles.cartTableData}>{DateString(order.createdAt)}</td>
                            <td className={styles.cartTableData}>
                                <button className={[styles.cartButton, styles.verify].join(' ')} onClick={() => IncStatus(order, order.pastries.reduce((sum, pastry) => sum + (pastry.pastryId.discount ? (((100 - pastry.pastryId.discount)/100) * pastry.pastryId.price * pastry.quantity) : (pastry.pastryId.price * pastry.quantity)), 0))}>Inc Status</button>
                                <button className={[styles.cartButton, styles.details].join(' ')} onClick={() => OrderDetails(order)}>Details</button>
                            </td>
                        </tr>
                    )}
                </table>
            <Notification setShow={setShow} show={show} message={message} />
            </div>
    )
}

const mapStateToProps = ({ auth, refresh }) => {
    return {
        user: auth.user,
        refresh: refresh.refresh
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setRefresh }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
