import React from 'react';

import { pans2 } from '../../res/img';
import styles from './UserTable.module.css';

const UserTable = (props) => { 
    const {isDetail, setIsDetail} = props;
    return (
            <div className={styles.cartSeparator}>
                <table className={styles.cartTable}>
                    <thead className={styles.cartTableHeader}>
                        <td className={styles.cartTableHeadeData}>Name</td>
                        <td className={styles.cartTableHeaderData}>Company</td>
                        <td className={styles.cartTableHeaderData}>Ordered</td>
                        <td className={styles.cartTableHeaderData}>Suspended</td>
                        <td className={styles.cartTableHeaderData}>Actions</td>
                    </thead>
                    <tr className={styles.cartTableRow}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>34</td>
                        <td className={styles.cartTableData}>False</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Suspend</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>34</td>
                        <td className={styles.cartTableData}>False</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Suspend</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>34</td>
                        <td className={styles.cartTableData}>False</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Suspend</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>34</td>
                        <td className={styles.cartTableData}>False</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Suspend</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.cartTableRow}>
                        <td className={[styles.cartTableData, styles.cartTableImageContainer].join(' ')}>
                            <img src={pans2} alt="Pastry Name" className={styles.cartTableDataImage} />
                            <b>Ice Cake</b>
                        </td>
                        <td className={styles.cartTableData}>Noelaa</td>
                        <td className={styles.cartTableData}>34</td>
                        <td className={styles.cartTableData}>False</td>
                        <td className={styles.cartTableData}>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Suspend</button>
                            <button className={styles.cartButton} onClick={() => console.log('Ordered')}>Details</button>
                        </td>
                    </tr>
                </table>
            </div>
    )
}

export default UserTable;
