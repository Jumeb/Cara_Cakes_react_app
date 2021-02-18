import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp, IoMail, IoPhonePortrait } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.css';
import {jbInc, logo8} from '../../res/img';

const Footer = () => {
    return (
        <footer className={styles.secFooter}>
            <div className={styles.footerLogoBox}>
                <img src={logo8} alt="CaraCakes" className={styles.footerLogo} />
            </div>
    <div className={styles.secContainer}>
        <div className={[styles.secSide, styles.footerLinks].join(' ')}>
            <div>
                <div className={styles.footerLeft}>
                    <h3 className={styles.subTitle}>
                        Locations
                    </h3>
                    <ul className={styles.footerList}>
                        <li className={styles.footerItem}><NavLink to='/hello' className={styles.footerLink}>Buea</NavLink></li>
                        <li className={styles.footerItem}><NavLink to='/hello' className={styles.footerLink}>Limbe</NavLink></li>
                        <li className={styles.footerItem}><NavLink to='/hello' className={styles.footerLink}>Bamenda</NavLink></li>
                    </ul>
                </div>
                <div className={styles.footerRight}>
                    <h3 className={styles.subTitle}>
                        Protocol
                    </h3>
                    <ul className={styles.footerList}>
                        <li className={styles.footerItem}><NavLink to='/hello' className={styles.footerLink}>Terms and Condition</NavLink></li>
                        <li className={styles.footerItem}><NavLink to='/hello' className={styles.footerLink}>Privacy Policy</NavLink></li>
                        <li className={styles.footerItem}><NavLink to='/hello' className={styles.footerLink}>Careers</NavLink></li>
                        <li className={styles.footerItem}><NavLink to='/hello' className={styles.footerDev}>JB Inc</NavLink></li>
                        <li className={styles.footerItem}><NavLink to='/hello' className={styles.footerDev}>Jume Brice</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.secSide}>
            <div className={styles.footerCreator}>
                <div className={styles.footerCreatorBox}>
                    <img src={jbInc} alt="Creator" className={styles.footerImage} />
                </div>
            </div>
        </div>
    </div>
    <div className={styles.footerContacts}>
        <span className={styles.footerContactsRound}><a href='https://www.facebook.com/jume.njah' target="_blank"><IoLogoFacebook /></a></span>
        <span className={styles.footerContactsRound}><a href='tel:237679574561'><IoPhonePortrait /></a></span>
        <span className={styles.footerContactsRound}><a href='mailto:bricejume@gmail.com'><IoMail /></a></span>
        <span className={styles.footerContactsRound}>
            <a 
                href="https://wa.me/237681726633?text=Good%20day,%20Mr%20Jume%20Brice,%20I'm%20interested%20in%20creating%20a%20baker%20account%20for%20my%20pastry%20business"
                target="_blank"
            >
                <IoLogoWhatsapp />
            </a></span>
    </div>
    <div className={styles.copyRight}>
        <p>Copyright &copy; of JBInc</p>
    </div>
</footer>
    )
}

export default Footer;
