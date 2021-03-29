import React from 'react';

import { pans2 } from '../../res/img';
import { DateString, Thousand } from '../../utils/utilities';
import styles from './OrderTable.module.css';

const OrderTable = (props) => { 
    const {orders, token} = props;
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
                            <td className={styles.cartTableData}><b>{order.userId.name}</b></td>
                            <td className={styles.cartTableData}>{order.bakerId.companyName}</td>
                            <td className={styles.cartTableData}>{order.status}</td>
                            <td className={styles.cartTableData}>{Thousand(order.pastries.reduce((sum, pastry) => sum + (pastry.quantity * pastry.pastryId.price), 0))}</td>
                            <td className={styles.cartTableData}>{DateString(order.createdAt)}</td>
                            <td className={styles.cartTableData}>
                                <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Delete</button>
                                <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Inc Status</button>
                                <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                            </td>
                        </tr>
                    )}
                </table>
            </div>
    )
}

export default OrderTable;
