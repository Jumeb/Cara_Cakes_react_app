import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { pans2 } from '../../res/img';
import { BASE_URL } from '../../utils/globalVariable';
import styles from './OrderTable.module.css';
import { setRefresh } from '../../redux/Actions/Refresh.actions';
import { ActivityTwo, Notification } from '..';
import { Thousand } from '../../utils/utilities';

const OrderTable = (props) => {
    const { isDetail, setIsDetail, user, token } = props;

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [orders, setOrders] = useState({});

    useEffect(() => {
        setLoading(true);
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
                    title: `Unexpected Error`,
                    message: `Please check your internet connection.`
                });
        })

        return () => {
            setLoading(false);
            
        }
    }, [])
    
    return (
        <>
             {loading ? <div> <ActivityTwo /> </div> : <>
                {Object.values(orders).map((order, index) => (<div className={styles.orderSeparator}>
                    <h1 className={styles.orderListBaker}>Company: {Object.keys(orders)[index]}</h1>
                    {order.map((order, index) =>
                        <table className={styles.orderTable}>
                            <thead className={styles.orderTableHeader}>
                                <td className={[styles.orderTableHeaderData, styles.product].join(' ')}>Product</td>
                                <td className={styles.orderTableHeaderData}>Price</td>
                                <td className={[styles.orderTableHeaderData, styles.message].join(' ')}>Message</td>
                                <td className={styles.orderTableHeaderData}>Quantity</td>
                                <td className={styles.orderTableHeaderData}>Total</td>
                            </thead>
                            {order.pastries.map((pastry, index) =>
                                <tr className={styles.orderTableRow}>
                                    <td className={[styles.orderTableData , styles.orderTableImageContainer].join(' ')}>
                                        <img src={`${BASE_URL}/${pastry.pastryId.image}`} alt="Pastry Name" className={styles.orderTableDataImage} />
                                        <b>{pastry.pastryId.name}</b>
                                    </td>
                                    <td className={styles.orderTableData}>{pastry.pastryId.price}</td>
                                    <td className={styles.orderTableData}>{pastry.message || "'empty'"}</td>
                                    <td className={styles.orderTableData}>{pastry.quantity}</td>
                                    <td className={styles.orderTableData}>{Thousand(pastry.pastryId.price * pastry.quantity)}</td>
                                </tr>
                            )}
                            <tr className={styles.orderTableRow}>
                                <td colSpan="3" className={[styles.orderTableData, styles.orderCoupon].join(' ')}>
                                    <h3>Order Status: {order.status}</h3>
                                </td>
                                <td colSpan="1" className={[styles.orderTableData, styles.orderCoupon].join(' ')}>
                                    {false && <button className={styles.orderButton} onClick={() => setIsDetail()} >Details</button>}
                                </td>
                                <td colSpan="1" className={styles.orderTableData}>Total: {Thousand(order.pastries.reduce((sum, pastry) => sum + (pastry.quantity * pastry.pastryId.price), 0))}</td>
                            </tr>
                        </table>
                    )}
                </div >
                ))}
                <Notification setShow={setShow} show={show} message={message} />
            </>}
        </>
    )
}
const mapStateToProps = ({auth}) => {
    return {
        token: auth.token,
        user: auth.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setRefresh }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);