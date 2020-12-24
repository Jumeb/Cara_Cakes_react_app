import React from 'react';

import { pans2 } from '../../res/img';
import styles from './OrderTable.module.css';

const OrderTable = () => {
    return (
            <div className={styles.orderSeparator}>
                <h1 className={styles.orderListBaker}>Baker: Cara Brown</h1>
                <table className={styles.orderTable}>
                    <thead className={styles.orderTableHeader}>
                        <td className={styles.orderTableHeaderData}>Product</td>
                        <td className={styles.orderTableHeaderData}>Price</td>
                        <td className={styles.orderTableHeaderData}>Quantity</td>
                        <td className={styles.orderTableHeaderData}>Total</td>
                    </thead>
                    <tr className={styles.orderTableRow}>
                        <td className={[styles.orderTableData , styles.orderTableImageContainer]}>
                            <img src={pans2} alt="Pastry Name" className={styles.orderTableDataImage} />
                            <p>Ice Cake</p>
                        </td>
                        <td className={styles.orderTableData}>3000</td>
                        <td className={styles.orderTableData}>3</td>
                        <td className={styles.orderTableData}>9000</td>
                    </tr>
                    <tr className={styles.orderTableRow}>
                        <td className={[styles.orderTableData, styles.orderTableImageContainer]}>
                            <img src={pans2} alt="Pastry Name" className={styles.orderTableDataImage} />
                            <p>Ice Cake</p>
                        </td>
                        <td className={styles.orderTableData}>40000</td>
                        <td className={styles.orderTableData}>4</td>
                        <td className={styles.orderTableData}>160,000</td>
                    </tr>
                    <tr className={styles.orderTableRow}>
                        <td colSpan="2" className={[styles.orderTableData, styles.orderCoupon]}>
                            <h3>Order Status: Processing</h3>
                        </td>
                        <td colSpan="1" className={[styles.orderTableData, styles.orderCoupon]}><button className={styles.orderButton}>Details</button></td>
                        <td colSpan="1" className={styles.orderTableData}>Total: 169,000</td>
                    </tr>
                </table>
            </div>
    )
}

export default OrderTable;