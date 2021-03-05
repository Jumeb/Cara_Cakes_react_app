import React from 'react';
import { PastryTable } from '../../Components';

import styles from './Pastry.module.css';

const Pastry = () => {
    return(
       <div className={styles.bakerSection}>
           <div className={styles.bakerLength}>
               <h2 className={styles.bakerLengthTitle}>5 Pastries</h2>
           </div>
           <div className={styles.bakerScroll}>
                <div className={styles.bakerCat}>
                    <button className={styles.bakerChoice}>All Pastries</button>
                    <button className={styles.bakerChoice}>Dougnuts</button>
                    <button className={styles.bakerChoice}>Cookies</button>
                    <button className={styles.bakerChoice}>Wedding Cakes</button>
                    <button className={styles.bakerChoice}>Birthday Cakes</button>
                    <button className={styles.bakerChoice}>Add Pastry</button>
                </div>
           </div>
           <PastryTable />
       </div>
    )
}

export default Pastry;