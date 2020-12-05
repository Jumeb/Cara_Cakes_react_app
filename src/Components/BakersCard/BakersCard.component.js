import React from 'react';

import './BakersCard.component.css'
import {pans1} from '../../res/img';

const BakersCard = (props) => {
    const {baker} = props;
    return (
        <div className="col-1-4">
            <div className="info txt-cnt">
                <h3 className="title-lil-3">The Founder</h3>
                <p className="para txt-cnt">
                    I really loved baking from when I was really young, because my mum did a lot of baking. Growing up I used to supply power to my mum in the mixing and checking. Now I am used to it and I did a lot of experimenting.
                </p>
                <div className="info__pic">
                    <div className="info__pic--round">
                        <img src={pans1} alt="Founder" className="info__img" />
                    </div>
                    <a href="/pastries/<%= baker.name %>?genre=Birthday-cake"
                        className="info__name txt-lt">{baker.name}</a>
                </div>
            </div>
        </div>
    )
}

export default BakersCard;
