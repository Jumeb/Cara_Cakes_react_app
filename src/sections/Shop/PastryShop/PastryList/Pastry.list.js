import React from 'react';
import { PastryCard, Spacer } from '../../../../Components';

import styles from './PastryList.module.css'

const PastryList = (props) => {
    const {isDetail, setIsDetail} = props;
    return (
        <div className={isDetail ? styles.pastriesListDetail : styles.pastriesList}>
            <PastryCard isDetail={isDetail} setIsDetail={setIsDetail} />
        </div>
    )
}

export default PastryList;
