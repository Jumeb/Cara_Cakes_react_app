import React, { useState } from 'react';

import BakerList from './BakerList/Baker.list';
import BakerDetail from './BakerDetail/Baker.detail';
import styles from './Baker.module.css'

const BakerSection = (props) => {
    const {isDetail, setIsDetail} = props;
    const [detail, setDetail] = useState({});
    return (
        <div className={styles.bakers}>
            <BakerList isDetail={isDetail} setIsDetail={setIsDetail} setDetail={setDetail} {...props} />
            <BakerDetail isDetail={isDetail} setIsDetail={setIsDetail} detail={detail} />
        </div>
    )
}

export default BakerSection;
