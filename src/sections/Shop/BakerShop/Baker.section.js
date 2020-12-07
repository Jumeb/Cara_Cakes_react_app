import React from 'react';

import BakerList from './BakerList/Baker.list';
import BakerDetail from './BakerDetail/Baker.detail';
import './Baker.section.css'

const BakerSection = () => {
    return (
        <div className="bakers">
            <BakerList />
            <BakerDetail />
        </div>
    )
}

export default BakerSection;
