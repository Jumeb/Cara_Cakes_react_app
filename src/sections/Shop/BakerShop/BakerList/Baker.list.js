import React from 'react';
import { BakerCard, Spacer } from '../../../../Components';

import styles from './BakerList.module.css'

const BakerList = (props) => {
    const {isDetail, setIsDetail} = props;
    return (
        <div className={isDetail ? styles.bakersListDetail : styles.bakersList}>
            <BakerCard isDetail={isDetail} setIsDetail={setIsDetail}/>
        </div>
    )
}

export default BakerList;
