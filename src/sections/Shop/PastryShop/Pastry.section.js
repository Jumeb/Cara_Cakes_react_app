import React, { useState } from 'react';

import styles from './Pastry.module.css'
import PastryList from './PastryList/Pastry.list';
import PastryDetail from './PastryDetail/Pastry.detail';

const PastrySection = (props) => {
    const {isDetail, setIsDetail} = props;
    const [detail, setDetail] = useState({});
    return (
        <div className={styles.pastries}>
            <PastryList isDetail={isDetail} setIsDetail={setIsDetail} setDetail={setDetail} />
            <PastryDetail addToCart={false} isDetail={isDetail} setIsDetail={setIsDetail} detail={detail} />
        </div>
    )
}

export default PastrySection;
