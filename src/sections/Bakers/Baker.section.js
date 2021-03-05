import React from 'react';
import { BakerTable, Button } from '../../Components';

import styles from './Baker.module.css';

const Bakers = () => {
    return(
       <div className={styles.bakerSection}>
           <div className={styles.bakerLength}>
               <h2 className={styles.bakerLengthTitle}>5 Bakers</h2>
           </div>
           <div className={styles.bakerCat}>
               <button className={styles.bakerChoice}>All Bakers</button>
               <button className={styles.bakerChoice}>New Bakers</button>
               <button className={styles.bakerChoice}>Verified</button>
               <button className={styles.bakerChoice}>Suspended</button>
               <button className={styles.bakerChoice}>Add Baker</button>
           </div>
           <BakerTable />
       </div>
    )
}

export default Bakers;