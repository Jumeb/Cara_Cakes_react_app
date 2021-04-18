import React from 'react';

import { HouseLogo} from '../../res/img';
import { BASE_URL } from '../../utils/globalVariable';
import { Thousand } from '../../utils/utilities';
import styles from './PastryTable.module.css';

const PastryTable = (props) => { 
    const { pastries, setDetail, setPastry } = props;

    const ShowDetail = (pastry) => {
        setDetail(true);
        setPastry(pastry);
    }
    
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
                            <img src={pastry.image ? `${BASE_URL}/${pastry.image}` : HouseLogo} alt={pastry.name} className={styles.cartTableDataImage} />
                            <b>{pastry.name}</b>
                        </td>
                        <td className={styles.cartTableData}>{pastry.creator.name}</td>
                        <td className={styles.cartTableData}>{pastry.type}</td>
                        <td className={styles.cartTableData}>{Thousand(pastry.price)}</td>
                        <td className={styles.cartTableData}>{pastry.discount}%</td>
                        <td className={styles.cartTableData}>
                            <button className={[styles.cartButton, styles.verify].join(' ')} onClick={() => ShowDetail(pastry)}>Details</button>
                            {/* <button className={[styles.cartDelete, styles.suspend].join(' ')} onClick={() => console.log('Ordered')}><IoTrashBinSharp /></button> */}
                        </td>
                    </tr>))}
                </table>
            </div>
    )
}

export default PastryTable;
