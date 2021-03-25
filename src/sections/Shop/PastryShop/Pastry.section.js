import React, { useState } from 'react';

import { PastryDetail } from '../../../Components';
import styles from './Pastry.module.css'
import PastryList from './PastryList/Pastry.list';

const PastrySection = (props) => {
    const {} = props;
    const [pastry, setPastry] = useState([])
    const [isDetail, setIsDetail] = useState(false);
    return (
        <div className={styles.pastries}>
            <PastryList isDetail={isDetail} setIsDetail={setIsDetail} setPastry={setPastry} />
            <PastryDetail detail={isDetail} setDetail={setIsDetail} pastry={pastry} />
        </div>
    )
}

export default PastrySection;
