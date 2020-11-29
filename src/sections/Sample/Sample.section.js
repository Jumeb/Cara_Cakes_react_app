import React from 'react';

import './Sample.section.css';
import {SampleCard} from '../../Components';

const Sample = () => {
    return (
        <section className="sec-sample" id="sec-sample flvs">
            <div className="txt-cnt margin-top-small margin-bottom-small">
                <h2 className="title-lil-1 txt-white" id="flvs">
                    Feel the flavour with every bite
                </h2>
            </div>
            <div className="sampleRow">
                <div className="col-1-3">
                    <SampleCard />
                </div>
                <div className="col-1-3">
                    <div className="card">
                        <div className="card__view card__view--front">
                            <div className="card__pic card__pic-2">
                                &nbsp;
                            </div>
                            <div className="txt-cnt">
                                <h5 className="card__heading card__heading-2">Christmas cakes</h5>
                                <ul className="card__list card__list-2">
                                    <li>Chocolate flavour</li>
                                    <li>Vanilla flavour</li>
                                    <li>Strawberry flavour</li>
                                    <li>Custom flavours by the client</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__view card__view--back card__view--back-2">
                            <div className="txt-cnt margin-bottom-medium margin-top-huge">
                                <p className="card__just">Just</p>
                                <p className="card__price">
                                    20000FCFA
                                </p>
                            </div>
                            <div className="txt-cnt margin-top-small">
                                <a href="/signup" className="btn-2 btn-2__hover-icon">Sign Up<span
                                        className="btn-2__icon">&#10095</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-3">
                    <div className="card">
                        <div className="card__view card__view--front">
                            <div className="card__pic card__pic-3">
                                &nbsp;
                            </div>
                            <div className="txt-cnt">
                                <h5 className="card__heading card__heading-3">Birthday cakes</h5>
                                <ul className="card__list card__list-3">
                                    <li>Chocolate flavour</li>
                                    <li>Vanilla flavour</li>
                                    <li>Strawberry flavour</li>
                                    <li>Custom flavours by the client</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__view card__view--back card__view--back-3">
                            <div className="txt-cnt margin-bottom-medium margin-top-huge">
                                <p className="card__just">Just</p>
                                <p className="card__price">
                                    50000FCFA
                                </p>
                            </div>
                            <div className="txt-cnt margin-top-small">
                                <a href="/signup" className="btn-2 btn-2__hover-icon">Sign Up<span
                                        className="btn-2__icon">&#10095</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sample;