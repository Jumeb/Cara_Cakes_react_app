import React from 'react';

import './SampleCard.component.css';
import {ButtonTwo} from '../../Components';

const SampleCard = () => {
    return (
        <div className="card">
                        <div className="card__view card__view--front">
                            <div className="card__pic card__pic-1">
                                &nbsp;
                            </div>
                            <div className="txt-cnt">
                                <h5 className="card__heading card__heading-1">Cup cakes</h5>
                                <ul className="card__list card__list-1">
                                    <li>Chocolate flavour</li>
                                    <li>Vanilla flavour</li>
                                    <li>Strawberry flavour</li>
                                    <li>Custom flavours by the client</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__view card__view--back card__view--back-1">
                            <div className="txt-cnt margin-bottom-medium margin-top-huge">
                                <p className="card__just">Just</p>
                                <p className="card__price">
                                    1000FCFA
                                </p>
                            </div>
                            <div className="txt-cnt margin-top-small">
                                <ButtonTwo />
                            </div>
                        </div>
                    </div>
    );
}

export default SampleCard;
