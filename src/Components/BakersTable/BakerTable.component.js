import React, { useEffect, useState } from 'react';
import {IoTrashBinSharp } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Notification, Verification } from '..';
import { HLogo } from '../../res/img';
import { BASE_URL } from '../../utils/globalVariable';
import styles from './BakerTable.module.css';
import { setRefresh } from '../../redux/Actions/Refresh.actions';

const BakerTable = (props) => {
    const { bakers, token, refresh, setDetail, setBaker } = props;
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(-1);
    const [verify, setVerify] = useState(false);
    const [message, setMessage] = useState({});

    useEffect(() => {
        props.setRefresh(false);
    }, []);

    const ShowDetails = (baker) => {
        setBaker(baker);
        setDetail(true);
    }

    const Delete = (data) => {
        setVerify(true);
        setMessage({
            type: 'danger',
            data: data,
            title: 'Deletion imminent',
            message: `Are you sure you want to delete company ${data.companyName}. They might have pending orders.`
        })
    }

    const DeleteAuth = (id) => {
        fetch(`${BASE_URL}/baker/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Basic ${token}`
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
                props.setRefresh(true);

                if (statusCode === 200) {
                    setMessage({
                        type: 'success',
                        title: 'Success',
                        message: response.message,
                    })
                    setTimeout(() => {
                        setVerify(false);
                    }, 2000)
                }

            })
            .catch(err => {
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.',
                })
            })
    }

    const Suspend = (id) => {
        fetch(`${BASE_URL}/baker/suspend/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Basic ${token}`
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
                props.setRefresh(true);

                if (statusCode === 200) {
                    setShow(true);
                    setMessage({
                        type: 'success',
                        title: 'Success',
                        message: response.message,
                    })
                }

            })
            .catch(err => {
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.',
                })
            })
    }

    const Verify = (id) => {
        fetch(`${BASE_URL}/baker/verify/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Basic ${token}`
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
                props.setRefresh(true);

                if (statusCode === 200) {
                    setShow(true);
                    setMessage({
                        type: 'success',
                        title: 'Success',
                        message: response.message,
                    })
                }

            })
            .catch(err => {
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.',
                })
            })
    }

    return (
        <>
            <div className={styles.cartSeparator}>
                <table className={styles.cartTable}>
                    <thead className={styles.cartTableHeader}>
                        <td className={styles.cartTableHeadeData}>Name</td>
                        <td className={styles.cartTableHeaderData}>Company</td>
                        <td className={styles.cartTableHeaderData}>Categories</td>
                        <td className={styles.cartTableHeaderData}>Suspended</td>
                        <td className={styles.cartTableHeaderData}>Verified</td>
                        <td className={styles.cartTableHeaderData}>Actions</td>
                    </thead>
                    {bakers.map((baker, index) =>
                        <tr className={[styles.cartTableRow, active === index && styles.cartTableRowShow].join(' ')} onClick={() => setActive(index)}>
                            <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                                <img src={baker.companyImage ? `${BASE_URL}/${baker.companyImage}` : HLogo} alt="Pastry Name" className={styles.cartTableDataImage} />
                                <b>{baker.name}</b>
                            </td>
                            <td className={styles.cartTableData}>{baker.companyName}</td>
                            <td className={styles.cartTableData}>{baker.categories.length}</td>
                            <td className={styles.cartTableData}>{baker.suspend ? 'True' : 'False'}</td>
                            <td className={styles.cartTableData}>{baker.verify ? 'True' : 'False'}</td>
                            <td className={styles.cartTableData}>
                                <button className={[styles.cartButton, styles.suspend].join(' ')} onClick={() => Suspend(baker._id)}>{baker.suspend ? 'Unsuspend' : 'Suspend'}</button>
                                <button className={[styles.cartButton, styles.verify].join(' ')} onClick={() => Verify(baker._id)}>{baker.verify ? 'Unverify' : 'Verify'}</button>
                                <button className={[styles.cartButton, styles.details].join(' ')} onClick={() => ShowDetails(baker)}>Details</button>
                                <button className={[styles.cartDelete, styles.suspend].join(' ')} onClick={() => Delete(baker)}><IoTrashBinSharp /></button>
                            </td>
                        </tr>
                    )}
                </table>
            </div>
            <Notification show={show} setShow={setShow} message={message} />
            <Verification verify={verify} setVerify={setVerify} message={message} onClick={(id) => DeleteAuth(id)} />
        </>
    )
};

const mapStateToProps = ({auth, refresh}) => {
    return {
        refresh: refresh.refresh,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setRefresh}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BakerTable);
