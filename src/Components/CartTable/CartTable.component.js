import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Notification } from '..';

import { pans2 } from '../../res/img';
import { BASE_URL } from '../../utils/globalVariable';
import { Thousand } from '../../utils/utilities';
import styles from './CartTable.module.css';

const CartTable = (props) => { 
    const {isDetail, setIsDetail, user} = props;

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({});
    const [cart, setCart] = useState({});

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}/user/getcart/${user._id}`, {
            method: 'GET'
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
                setCart(response.bakers);
                setShow(true);
                setMessage({
                    type: 'success',
                    title: `Your cart ${user.name}`,
                    message: `Your cart ${user.name}`
                });
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
            setShow(true);
            setMessage({
                type: 'error',
                title: `Unexpected Error`,
                message: `Please check your internet connection.`
            });
        })
    }, []);

    return (
        <>
            {Object.values(cart).map((pastries, index) => (
                <div className={styles.cartSeparator}>
                    <h1 className={styles.cartListBaker}>Company: {Object.keys(cart)[index]} </h1>
                    <table className={styles.cartTable}>
                        <thead className={styles.cartTableHeader}>
                            <td className={styles.cartTableHeadeData}>Product</td>
                            <td className={styles.cartTableHeaderData}>Price</td>
                            <td className={styles.cartTableHeaderData}>Quantity</td>
                            <td className={styles.cartTableHeaderData}>Total</td>
                        </thead>

                    {pastries.map((pastry, index) => 
                        <tr className={styles.cartTableRow} onClick={() => setIsDetail(true)}>
                            <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                                <img src={`${BASE_URL}/${pastry.pastryId.image}`} alt={pastry.pastryId.name} className={styles.cartTableDataImage} />
                                <b>{pastry.pastryId.name}</b>
                            </td>
                            <td className={styles.cartTableData}>{Thousand(pastry.pastryId.price)}</td>
                            <td className={styles.cartTableData}>{pastry.quantity}</td>
                            <td className={styles.cartTableData}>{Thousand(pastry.quantity * pastry.pastryId.price)}</td>
                        </tr>
                    )}
                        <tr className={styles.cartTableRow}>
                            <td colSpan="2" className={[styles.cartTableData, styles.cartCoupon].join(' ')}>
                                <input type="text" placeholder="Coupon Code" className={styles.cartCouponInput} /> 
                                <button className={styles.cartButton}>Apply</button>
                            </td>
                            <td colSpan="1" className={[styles.cartTableData, styles.cartCoupon].join(' ')}>
                                <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Order</button>
                            </td>
                            <td colSpan="1" className={styles.cartTableData}>Total: {Thousand(Object.values(cart)[index].reduce((sum, pastry) => sum + (pastry.quantity * pastry.pastryId.price), 0))}</td>
                        </tr>
                    </table>
                </div>
            ))}
            <Notification setShow={setShow} show={show} message={message} />
        </>
    )
}

const mapStateToProps = ({auth}) => {
    return {
        user: auth.user,
    }
}

export default connect(mapStateToProps)(CartTable);
