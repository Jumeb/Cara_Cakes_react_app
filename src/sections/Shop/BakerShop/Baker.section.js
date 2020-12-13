import React from 'react';

import BakerList from './BakerList/Baker.list';
import BakerDetail from './BakerDetail/Baker.detail';
import './Baker.section.css'

const BakerSection = (props) => {
    const {isDetail, setIsDetail} = props;
    return (
        <div className="bakers">
            <BakerList isDetail={isDetail} setIsDetail={setIsDetail} />
            <BakerDetail isDetail={isDetail} setIsDetail={setIsDetail} />
        </div>
    )
}

export default BakerSection;
