import React from 'react';

import './About.section.css'
import {bds1, chris3, cookies4, cups2, dons2, pans2, vals1, weds1} from '../../res/img';

const About = () => {
    return (
        <section className="sec-abt">
            <div className="txt-cnt margin-top-small margin-bottom-small">
                <h2 className="title-lil-1" id="offers">
                    We bring flavours for everyone
                </h2>
            </div>
            <div className="row">
                <div className="col-1-2">
                    <h3 className="title-lil-2">
                        You are going to feel the flavours in your spine
                    </h3>

                    <p className="para">
                        Our team of expert bakers have years of experience, failed recipes, good recipes and perfect recipes. Thus this gives them the upper hand of knowing how a hint of vanilla will feel with a pinch of nutmeg
                    </p>

                    <h3 className="title-lil-2">
                        Not only cakes, but everything flour with flavours
                    </h3>

                    <p className="para">
                        We have an endless list of flour related stuff you can enjoy, not limited to cakes but ranging from cookies, to cupcakes even the best of pancakes with years of perfecting and incorporating different types of flavours
                    </p>
                </div>
                <div className="col-1-2">
                    <div className="frame">
                        <div className="frame__pic1 frame__carousel txt-cnt frame__previous">
                            <img src={cups2} alt="Cup cakes" className="frame__size-large" />
                            <h3 className="title-lil-3">Cup cakes</h3>
                        </div>
                        <div className="frame__pic2 frame__carousel txt-cnt frame__current">
                            <img src={bds1} alt="Birthday cakes" className="frame__size-large" />
                            <h3 className="title-lil-3">Birthday cakes</h3>
                        </div>
                        <div className="frame__pic3 frame__carousel txt-cnt frame__next">
                            <img src={vals1}alt="Valentine cakes" className="frame__size-large" />
                            <h3 className="title-lil-3">Valentine cakes</h3>
                        </div>
                        <div className="frame__pic4 frame__carousel txt-cnt">
                            <img src={weds1} alt="Wedding cakes" className="frame__size-large" />
                            <h3 className="title-lil-3">Wedding cakes</h3>
                        </div>
                        <div className="frame__pic1 frame__carousel txt-cnt">
                            <img src={cookies4} alt="cookies" className="frame__size-large" />
                            <h3 className="title-lil-3">Cookies</h3>  
                        </div>
                        <div className="frame__pic2 frame__carousel txt-cnt">
                            <img src={pans2} alt="pancakes" className="frame__size-large" />
                            <h3 className="title-lil-3">Pancakes</h3>
                        </div>
                        <div className="frame__pic3 frame__carousel txt-cnt">
                            <img src={dons2} alt="doughnuts" className="frame__size-large" />
                            <h3 className="title-lil-3">Doughnuts</h3>
                        </div>
                        <div className="frame__pic4 frame__carousel txt-cnt">
                            <img src={chris3} alt="Christmas cakes" className="frame__size-large" />
                            <h3 className="title-lil-3">Christmas cakes</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
