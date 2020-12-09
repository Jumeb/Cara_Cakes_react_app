import React from 'react';

import './Pastry.section.css'
import PastryList from './PastryList/Pastry.list';
import PastryDetail from './PastryDetail/Pastry.detail';

const PastrySection = () => {
    return (
        <div className="pastries">
            <PastryList />
            <PastryDetail addToCart={false} />
        </div>
    )
}

export default PastrySection;
