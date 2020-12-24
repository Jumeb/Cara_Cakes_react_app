import React from 'react';
import { PastryCard, Spacer } from '../../../../Components';

import './Pastry.list.css'

const PastryList = (props) => {
    const {isDetail, setIsDetail} = props;
    return (
        <div className={isDetail ? "pastries__listDetail" : "pastries__list"}>
            <Spacer />
            <PastryCard />
        </div>
    )
}

export default PastryList;
