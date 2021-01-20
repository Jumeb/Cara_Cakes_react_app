import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp, IoMail } from 'react-icons/io5';
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
        <span className={styles.footerContactsRound}><NavLink to='/hello'><IoLogoFacebook /></NavLink></span>
        <span className={styles.footerContactsRound}><NavLink to='/hello'><IoLogoInstagram /></NavLink></span>
        <span className={styles.footerContactsRound}><NavLink to='/hello'><IoMail /></NavLink></span>
        <span className={styles.footerContactsRound}><NavLink to='/hello'><IoLogoWhatsapp /></NavLink></span>
    </div>
    <div className={styles.copyRight}>
        <p>Copyright &copy; of JBInc</p>
    </div>
</footer>
    )
}

export default Footer;
