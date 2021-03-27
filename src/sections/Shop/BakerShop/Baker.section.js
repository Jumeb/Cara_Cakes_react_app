import React, { useState } from 'react';

import BakerList from './BakerList/Baker.list';
import styles from './Baker.module.css'
import { BakerDetails } from '../../../Components';

const BakerSection = (props) => {
    
    const [isDetail, setIsDetail] = useState(false);
    const [baker, setBaker] = useState([]);
    return (
        <div className={styles.bakers}>
            <BakerList isDetail={isDetail} setIsDetail={setIsDetail} setBaker={setBaker} _baker={baker} {...props} />
            <BakerDetails detail={isDetail} setDetail={setIsDetail} baker={baker} {...props} />
        </div>
    )
}

export default BakerSection;
