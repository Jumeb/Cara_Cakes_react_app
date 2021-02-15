import React from 'react';

import styles from './Pastry.module.css'
import PastryList from './PastryList/Pastry.list';
import PastryDetail from './PastryDetail/Pastry.detail';

const PastrySection = (props) => {
    const {isDetail, setIsDetail} = props;
    return (
        <div className={styles.pastries}>
            <PastryList isDetail={isDetail} setIsDetail={setIsDetail} />
            <PastryDetail addToCart={false} isDetail={isDetail} setIsDetail={setIsDetail} />
        </div>
    )
}

export default PastrySection;
