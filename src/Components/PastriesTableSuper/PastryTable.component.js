import React from 'react';

import { pans2 } from '../../res/img';
import styles from './PastryTable.module.css';

const PastryTable = (props) => { 
    const {isDetail, setIsDetail} = props;
    return (
            <div className={styles.cartSeparator}>
                <table className={styles.cartTable}>
                    <thead className={styles.cartTableHeader}>
                        <td className={styles.cartTableHeaderData}>Name</td>
                        <td className={styles.cartTableHeaderData}>Author</td>
                        <td className={styles.cartTableHeaderData}>Category</td>
                        <td className={styles.cartTableHeaderData}>Price</td>
                        <td className={styles.cartTableHeaderData}>Discount</td>
                        <td className={styles.cartTableHeaderData}>Actions</td>
                    </thead>
                    <tr className={styles.cartTableRow}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>C & K Cakes</td>
                        <td className={styles.cartTableData}>Birthday Cake</td>
                        <td className={styles.cartTableData}>10,000</td>
                        <td className={styles.cartTableData}>2%</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Rate</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>C & K Cakes</td>
                        <td className={styles.cartTableData}>Birthday Cake</td>
                        <td className={styles.cartTableData}>10,000</td>
                        <td className={styles.cartTableData}>2%</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Rate</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>C & K Cakes</td>
                        <td className={styles.cartTableData}>Birthday Cake</td>
                        <td className={styles.cartTableData}>10,000</td>
                        <td className={styles.cartTableData}>2%</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Rate</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>C & K Cakes</td>
                        <td className={styles.cartTableData}>Birthday Cake</td>
                        <td className={styles.cartTableData}>10,000</td>
                        <td className={styles.cartTableData}>2%</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Rate</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>C & K Cakes</td>
                        <td className={styles.cartTableData}>Birthday Cake</td>
                        <td className={styles.cartTableData}>10,000</td>
                        <td className={styles.cartTableData}>2%</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Rate</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                </table>
            </div>
    )
}

export default PastryTable;
