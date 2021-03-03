import React from 'react';

import { pans2 } from '../../res/img';
import styles from './BakerTable.module.css';

const BakerTable = (props) => { 
    const {isDetail, setIsDetail} = props;
    return (
            <div className={styles.cartSeparator}>
                <table className={styles.cartTable}>
                    <thead className={styles.cartTableHeader}>
                        <td className={styles.cartTableHeadeData}>Name</td>
                        <td className={styles.cartTableHeaderData}>Company</td>
                        <td className={styles.cartTableHeaderData}>Status</td>
                        <td className={styles.cartTableHeaderData}>Suspended</td>
                        <td className={styles.cartTableHeaderData}>Verified</td>
                        <td className={styles.cartTableHeaderData}>Actions</td>
                    </thead>
                    <tr className={styles.cartTableRow} onClick={() => setIsDetail()}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>C & K</td>
                        <td className={styles.cartTableData}>False</td>
                        <td className={styles.cartTableData}>True</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Suspend</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Verify</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow} onClick={() => setIsDetail()}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>C & K</td>
                        <td className={styles.cartTableData}>False</td>
                        <td className={styles.cartTableData}>True</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Suspend</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Verify</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow} onClick={() => setIsDetail()}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>C & K</td>
                        <td className={styles.cartTableData}>False</td>
                        <td className={styles.cartTableData}>True</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Suspend</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Verify</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow} onClick={() => setIsDetail()}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>C & K</td>
                        <td className={styles.cartTableData}>False</td>
                        <td className={styles.cartTableData}>True</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Suspend</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Verify</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow} onClick={() => setIsDetail()}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>C & K</td>
                        <td className={styles.cartTableData}>False</td>
                        <td className={styles.cartTableData}>True</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Suspend</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Verify</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                </table>
            </div>
    )
}

export default BakerTable;
