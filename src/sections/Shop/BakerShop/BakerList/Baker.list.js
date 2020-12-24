import React from 'react';
import { BakerCard, Spacer } from '../../../../Components';

import { cookies4, cups2, dons3, logo5, pans4, vals2, vals3 } from '../../../../res/img';
import './Baker.list.css'

const BakerList = (props) => {
    const {isDetail, setIsDetail} = props;
    return (
        <div className={isDetail ? "bakers__listDetail" : "bakers__list"}>
            <Spacer />
            <BakerCard />
        </div>
    )
}

export default BakerList;
