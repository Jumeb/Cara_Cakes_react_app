import React from 'react';

import { pans2 } from '../../res/img';
import styles from './PastryTable.module.css';

const PastryTable = (props) => { 
    const {pastries} = props;
    return (
            <div className={styles.cartSeparator}>
                <table className={styles.cartTable}>
                    <thead className={styles.cartTableHeader}>
                        <td className={styles.cartTableHeaderData}>Name</td>
                        <td className={styles.cartTableHeaderData}>Creator</td>
                        <td className={styles.cartTableHeaderData}>Category</td>
                        <td className={styles.cartTableHeaderData}>Price</td>
                        <td className={styles.cartTableHeaderData}>Discount</td>
                        <td className={styles.cartTableHeaderData}>Actions</td>
                    </thead>
                    {pastries.map((pastry, index) => (<tr className={styles.cartTableRow}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pastry.image ? `http://localhost:8081/${pastry.image}` : pans2} alt={pastry.name} className={styles.cartTableDataImage} />
                            <b>{pastry.name}</b>
                        </td>
                        <td className={styles.cartTableData}>{pastry.creator.name}</td>
                        <td className={styles.cartTableData}>{pastry.type}</td>
                        <td className={styles.cartTableData}>{pastry.price}</td>
                        <td className={styles.cartTableData}>{pastry.discount}%</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Delete</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>))}
                </table>
            </div>
    )
}

export default PastryTable;
