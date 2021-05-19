import React, { useEffect, useState } from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { HouseLogo } from '../../res/img';
import { BASE_URL } from '../../utils/globalVariable';
import styles from './PastryTable.module.css';
import { setRefresh } from '../../redux/Actions/Refresh.actions';
import { Thousand } from '../../utils/utilities';
import { Notification, Verification } from '..';

const PastryTable = (props) => { 

    const { pastries, token, setDetail, refresh, setPastry, user } = props;
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(-1);
    const [verify, setVerify] = useState(false);
    const [message, setMessage] = useState({});

    useEffect(() => {
        props.setRefresh(false);
    }, [refresh]);

    useEffect(() => {
        return () => {
            setVerify(false);
            setMessage({});
            setShow(false);
            setLoading(false);
        }
    }, []);

    const ShowDetail = (pastry) => {
        setDetail(true);
        setPastry(pastry);
    }

        const Delete = (data) => {
        setVerify(true);
        setMessage({
            type: 'danger',
            data: data,
            title: 'Deletion imminent',
            message: `Are you sure you want to delete pastry ${data.name}. Users might have it in their cart.`
        })
    }


    const DeleteAuth = (id) => {
        fetch(`${BASE_URL}/pastry/delete/${id}`, {
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

                if (statusCode === 200) {
                    props.setRefresh(true);
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
    
    return (
        <>
            <div className={styles.cartSeparator}>
                <table className={styles.cartTable}>
                    <thead className={styles.cartTableHeader}>
                        <td className={styles.cartTableHeadeData}>Name</td>
                        <td className={styles.cartTableHeaderData}>Category</td>
                        <td className={styles.cartTableHeaderData}>Price</td>
                        <td className={styles.cartTableHeaderData}>Discount</td>
                        <td className={styles.cartTableHeaderData}>Actions</td>
                    </thead>
                    {pastries.map((pastry, index) => (<tr className={[styles.cartTableRow, active === index && styles.cartTableRowShow].join(' ')} onClick={() => setActive(index)}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pastry.image ? `${BASE_URL}/${pastry.image}` : HouseLogo} alt={pastry.name} className={styles.cartTableDataImage} />
                            <b>{pastry.name}</b>
                        </td>
                        <td className={styles.cartTableData}>{pastry.type}</td>
                        <td className={styles.cartTableData}>{Thousand(pastry.price)}</td>
                        <td className={styles.cartTableData}>{pastry.discount}%</td>
                        <td className={styles.cartTableData}>
                            <button className={[styles.cartButton, styles.verify].join(' ')} onClick={() => ShowDetail(pastry)}>Details</button>
                            <button className={[styles.cartDelete, styles.suspend].join(' ')} onClick={() => Delete(pastry)}><IoTrashBinSharp /></button>
                        </td>
                    </tr>))}
                </table>
            </div>
            <Notification show={show} setShow={setShow} message={message} />
            <Verification verify={verify} setVerify={setVerify} message={message} onClick={(id) => DeleteAuth(id)} />
        </>
    )
}

const mapStateToProps = ({ auth, refresh }) => {
    return {
        user: auth.user,
        refresh: refresh.refresh,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setRefresh }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PastryTable);
