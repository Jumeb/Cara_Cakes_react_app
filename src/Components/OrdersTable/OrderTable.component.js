import React from 'react';

import { pans2 } from '../../res/img';
import styles from './OrderTable.module.css';

const OrderTable = (props) => { 
    const {isDetail, setIsDetail} = props;
    return (
            <div className={styles.cartSeparator}>
                <table className={styles.cartTable}>
                    <thead className={styles.cartTableHeader}>
                        <td className={styles.cartTableHeadeData}>Client Name</td>
                        <td className={styles.cartTableHeaderData}>Company</td>
                        <td className={styles.cartTableHeaderData}>Status</td>
                        <td className={styles.cartTableHeaderData}>Total</td>
                        <td className={styles.cartTableHeaderData}>Date</td>
                        <td className={styles.cartTableHeaderData}>Actions</td>
                    </thead>
                    <tr className={styles.cartTableRow}>
                        <td className={styles.cartTableData}><b>Ice Cake</b></td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>New</td>
                        <td className={styles.cartTableData}>10,000</td>
                        <td className={styles.cartTableData}>Sat, 19th Mar, 2021</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Delete</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Inc Status</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow}>
                        <td className={styles.cartTableData}><b>Ice Cake</b></td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>New</td>
                        <td className={styles.cartTableData}>10,000</td>
                        <td className={styles.cartTableData}>Sat, 19th Mar, 2021</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Delete</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Inc Status</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow}>
                        <td className={styles.cartTableData}><b>Ice Cake</b></td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>New</td>
                        <td className={styles.cartTableData}>10,000</td>
                        <td className={styles.cartTableData}>Sat, 19th Mar, 2021</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Delete</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Inc Status</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow}>
                        <td className={styles.cartTableData}><b>Ice Cake</b></td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>New</td>
                        <td className={styles.cartTableData}>10,000</td>
                        <td className={styles.cartTableData}>Sat, 19th Mar, 2021</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Delete</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Inc Status</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow}>
                        <td className={styles.cartTableData}><b>Ice Cake</b></td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>New</td>
                        <td className={styles.cartTableData}>10,000</td>
                        <td className={styles.cartTableData}>Sat, 19th Mar, 2021</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Delete</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Inc Status</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                </table>
            </div>
    )
}

export default OrderTable;
