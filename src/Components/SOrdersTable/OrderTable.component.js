import React from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';

import { pans2 } from '../../res/img';
import { BASE_URL } from '../../utils/globalVariable';
import { DateString, Thousand } from '../../utils/utilities';
import styles from './OrderTable.module.css';

const OrderTable = (props) => { 
    const { orders, token, setOrder, setDetail } = props;

    const OrderDetails = (order) => {
        setOrder(order);
        setDetail(true);
    }

    return (
            <div className={styles.cartSeparator}>
                <table className={styles.cartTable}>
                    <thead className={styles.cartTableHeader}>
                        <td className={styles.cartTableHeadeData}>Client Name</td>
                        <td className={styles.cartTableHeaderData}>Company Name</td>
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
                            <td className={styles.cartTableData}>{order.bakerId.companyName}</td>
                            <td className={styles.cartTableData}>{order.status}</td>
                            <td className={styles.cartTableData}>{Thousand(order.pastries.reduce((sum, pastry) => sum + (pastry.pastryId.discount ? (((100 - pastry.pastryId.discount)/100) * pastry.pastryId.price * pastry.quantity) : (pastry.pastryId.price * pastry.quantity)), 0))}</td>
                            <td className={styles.cartTableData}>{DateString(order.createdAt)}</td>
                            <td className={styles.cartTableData}>
                                <button className={[styles.cartButton, styles.verify].join(' ')} onClick={() => OrderDetails(order)}>Details</button>
                                <button className={[styles.cartDelete, styles.suspend].join(' ')} onClick={() => console.log('Haha')}><IoTrashBinSharp /></button>
                            </td>
                        </tr>
                    )}
                </table>
            </div>
    )
}

export default OrderTable;
