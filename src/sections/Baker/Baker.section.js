import React from 'react'

import './Baker.section.css';
import {BakersCard} from '../../Components';

const Baker = () => {
    return (
        <section className="sec-description" id="stry">
    <div className="txt-cnt margin-top-medium-ve margin-bottom-medium">
        <h2 className="title-lil-1">
            Our team of expert bakers
        </h2>
    </div>
    <div className="row margin-bottom-medium margin-top-huge">
        {bakers.map((baker, index) => <BakersCard baker={baker} />)}
    </div>
</section>
    )
}

export default Baker;

const bakers = [
    {id: 1, name: 'James Bond'},
    {id: 2, name: 'James Bond'},
    {id: 3, name: 'James Bond'},
    {id: 4, name: 'James Bond'}
]
