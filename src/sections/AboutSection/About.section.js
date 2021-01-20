import React, { useEffect, useState } from 'react';

import styles from './About.module.css'
import {bds1, chris3, cookies4, cups2, dons2, pans2, vals1, weds1} from '../../res/img';

const About = () => {
    const [index, setIndex] = useState(1);
    useEffect(() => {
        if (index === 5) {
            setIndex(1);
        }
        setTimeout(() => {
            setIndex(index + 1);
        },5000)
    }, [index])
    return (
        <section className={styles.secAbout}>
                <h2 className={styles.secTitle} id="offers">
                    We bring flavours for everyone
                </h2>
            <div className={styles.secContainer}>
                <div className={styles.secSide}>
                    <h3 className={styles.subTitle}>
                        You are going to feel the flavours in your spine
                    </h3>

                    <p>
                        Our team of expert bakers have years of experience, failed recipes, good recipes and perfect recipes. Thus this gives them the upper hand of knowing how a hint of vanilla will feel with a pinch of nutmeg
                    </p>

                    <h3 className={styles.subTitle}>
                        Not only cakes, but everything flour with flavours
                    </h3>

                    <p>
                        We have an endless list of flour related stuff you can enjoy, not limited to cakes but ranging from cookies, to cupcakes even the best of pancakes with years of perfecting and incorporating different types of flavours
                    </p>
                </div>
                <div className={styles.secSide}>
                    <div className={styles.frame}>
                        <div className={[styles.framePic1, styles.frameCarousel, index === 1 && styles.frameCurrent].join(' ')}> 
                            <img src={cups2} alt="Cup cakes" className={styles.frameSizeLarge} />
                            <h3 className={styles.lilTitle}>Cup cakes</h3>
                        </div>
                        <div className={[styles.framePic2, styles.frameCarousel, index === 2 && styles.frameCurrent].join(' ')}>
                            <img src={bds1} alt="Birthday cakes" className={styles.frameSizeLarge} />
                            <h3 className={styles.lilTitle}>Birthday cakes</h3>
                        </div>
                        <div className={[styles.framePic3, styles.frameCarousel, index === 3 && styles.frameCurrent].join(' ')}>
                            <img src={vals1}alt="Valentine cakes" className={styles.frameSizeLarge} />
                            <h3 className={styles.lilTitle}>Valentine cakes</h3>
                        </div>
                        <div className={[styles.framePic4, styles.frameCarousel, index === 4 && styles.frameCurrent].join(' ')}>
                            <img src={weds1} alt="Wedding cakes" className={styles.frameSizeLarge} />
                            <h3 className={styles.lilTitle}>Wedding cakes</h3>
                        </div>
                        <div className={[styles.framePic1, styles.frameCarousel, index === 5 && styles.frameCurrent].join(' ')}>
                            <img src={cookies4} alt="cookies" className={styles.frameSizeLarge} />
                            <h3 className={styles.lilTitle}>Cookies</h3>  
                        </div>
                        <div className={[styles.framePic2, styles.frameCarousel, index === 6 && styles.frameCurrent].join(' ')}>
                            <img src={pans2} alt="pancakes" className={styles.frameSizeLarge} />
                            <h3 className={styles.lilTitle}>Pancakes</h3>
                        </div>
                        <div className={[styles.framePic3, styles.frameCarousel, index === 7 && styles.frameCurrent].join(' ')}>
                            <img src={dons2} alt="doughnuts" className={styles.frameSizeLarge} />
                            <h3 className={styles.lilTitle}>Doughnuts</h3>
                        </div>
                        <div className={[styles.framePic4, styles.frameCarousel, index === 8 && styles.frameCurrent].join(' ')}>
                            <img src={chris3} alt="Christmas cakes" className={styles.frameSizeLarge} />
                            <h3 className={styles.lilTitle}>Christmas cakes</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
