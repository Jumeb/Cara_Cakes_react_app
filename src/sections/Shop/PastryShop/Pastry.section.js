import React, { useState } from 'react';

import { PastryDetail, PastryDetailV2 } from '../../../Components';
import styles from './Pastry.module.css'
import PastryList from './PastryList/Pastry.list';

const PastrySection = (props) => {
    const [pastry, setPastry] = useState([])
    const [isDetail, setIsDetail] = useState(false);
    return (
        <div className={styles.pastries}>
            <PastryList isDetail={isDetail} setIsDetail={setIsDetail} setPastry={setPastry} {...props} />
            <PastryDetailV2 detail={isDetail} setDetail={setIsDetail} pastry={pastry} />
        </div>
    )
}

export default PastrySection;
