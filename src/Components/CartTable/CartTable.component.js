import React, { useEffect, useState } from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActivityTwo, Notification } from '..';
import { BASE_URL } from '../../utils/globalVariable';
import { Thousand } from '../../utils/utilities';
import styles from './CartTable.module.css';
import { setRefresh } from '../../redux/Actions/Refresh.actions';

const CartTable = (props) => { 
    const {isDetail, setIsDetail, setPastry, user, refresh, token} = props;

    const showDetail = (pastry) => {
        setIsDetail(true);
        setPastry(pastry);
    }

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [_user, setUser] = useState([]);
    const [bActive, setBActive] = useState(-1);
    const [active, setActive] = useState(-1);
    const [message, setMessage] = useState({});
    const [cart, setCart] = useState({});

    useEffect(() => {
        props.setRefresh(false);
    }, [isDetail])

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
                setUser(response.user);
                setCart(response.bakers);
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
                title: `Unexpected Error`,
                message: `Please check your internet connection.`
            });
        })

        return () => {
            setLoading(false);
            setUser([]);
            setShow(false);
            setMessage({});
            setCart({});
        }
    }, [refresh]);

    const Trash = (event, id) => {
        event.stopPropagation();
        setLoading(true);
        fetch(`${BASE_URL}/user/removeFromCart/${id}?user=${user._id}`, {
            method: 'POST',
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
            props.setRefresh(true);

            if (statusCode === 200) {
                setShow(true);
                setMessage({
                    type: 'success',
                    message: `Pastry removed from cart`,
                    title: 'Success'
                });
                props.setRefresh(false);
            }
            if(statusCode === 422) {
                setShow(true);
                setMessage({
                    type: 'error',
                    message: `Not removed from cart.`,
                    title: 'Failed'
                });
            }

        })
        .catch(err => {
            setLoading(false);
            setShow(true);
            setMessage({
                type: 'error',
                title: 'Unexpected Error',
                    message: 'Please check your internet connection.'
            });
        })
    }

    const Order = (id) => {
        fetch(`${BASE_URL}/create/order/${user._id}?baker=${id}`, {
            method: 'POST',
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
                        message: 'Successfully placed your order',
                    });
                    setTimeout(() => {
                        props.setRefresh(true);                        
                    }, 2000);
                }
            })
            .catch(err => {
                setLoading(false);
                setShow(true);
                setMessage({
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.',
                });
        })
    }

    const ShowActive = (bakerIndex, pastryIndex) => {
        setActive(pastryIndex);
        setBActive(bakerIndex);
    }

    return (
        <>
            {loading ? <div>
                <ActivityTwo />
            </div> : <>
                {Object.keys(cart)[0] ? Object.values(cart).map((pastries, i) => (
                    <div className={styles.cartSeparator} key={ i }>
                        <h1 className={styles.cartListBaker}>Company: {Object.keys(cart)[i]} {_user.find(data => data.pastryId.creator.companyName === `${Object.keys(cart)[i]}`).pastryId.creator.suspend && <span className={styles.suspended}>Suspended, order at your own discretion.</span>}</h1>
                        <table className={styles.cartTable}>
                            <thead className={styles.cartTableHeader}>
                                <td className={styles.cartTableHeadeData}>Product</td>
                                <td className={styles.cartTableHeaderData}>Price</td>
                                <td className={styles.cartTableHeaderData}>Discount</td>
                                <td className={styles.cartTableHeaderData}>Quantity</td>
                                <td className={styles.cartTableHeaderData}>Total</td>
                            </thead>

                        {pastries.map((pastry, index) => 
                            <tr className={[styles.cartTableRow, active === index && bActive === i && styles.cartTableRowShow].join(' ')} onClick={() => ShowActive(i, index)} key={index}>
                                <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                                    <img src={`${BASE_URL}/${pastry.pastryId.image}`} alt={pastry.pastryId.name} className={styles.cartTableDataImage} onClick={() => showDetail(pastry)} />
                                    <b className={styles.pastryName}>{pastry.pastryId.name}</b>
                                </td>
                                <td className={styles.cartTableData}>{Thousand(pastry.pastryId.price)}</td>
                                <td className={styles.cartTableData}>{pastry.pastryId.discount}%</td>
                                <td className={styles.cartTableData}>{pastry.quantity} <button className={[styles.cartDelete, styles.suspend].join(' ')} onClick={(event) => Trash(event, pastry.pastryId._id)}><IoTrashBinSharp /></button></td>
                                <td className={styles.cartTableData}>{Thousand(pastry.quantity * pastry.pastryId.price)}</td>
                            </tr>
                        )}
                            <tr className={styles.cartTableRow}>
                                <td colSpan="3" className={[styles.cartTableData, styles.cartCoupon].join(' ')}>
                                    <input type="text" placeholder="Coupon Code" className={styles.cartCouponInput} /> 
                                    <button className={styles.cartButton}>Apply</button>
                                </td>
                                <td colSpan="1" className={[styles.cartTableData, styles.cartCoupon].join(' ')}>
                                    <button className={styles.cartButton} onClick={() => Order(_user.find(data => data.pastryId.creator.companyName === `${Object.keys(cart)[i]}`).pastryId.creator._id)}>Order</button>
                                </td>
                                <td colSpan="1" className={styles.cartTableData}>Total: {Thousand(Object.values(cart)[i].reduce((sum, pastry) => sum + (pastry.pastryId.discount ? (((100 - pastry.pastryId.discount)/100) * pastry.pastryId.price * pastry.quantity) : (pastry.pastryId.price * pastry.quantity)), 0))}</td>
                            </tr>
                        </table>
                    </div>
                )) : <div className={styles.cartSeparator}>
                            <h2 className={styles.title}>No Pastries in Cart</h2>
                    </div>}
                <Notification setShow={setShow} show={show} message={message} />
            </>}
        </>
    )
}

const mapStateToProps = ({auth, refresh}) => {
    return {
        user: auth.user,
        token: auth.token,
        refresh: refresh.refresh
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setRefresh }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
