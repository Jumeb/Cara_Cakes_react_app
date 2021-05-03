import React from 'react';
import { IoLogoFacebook, IoLogoWhatsapp, IoMail, IoPhonePortrait } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.css';
import {jbInc, HouseLogo1} from '../../res/img';

const Footer = () => {
    return (
        <footer className={styles.secFooter}>
            <div className={styles.footerLogoBox}>
                <img src={HouseLogo1} alt="CaraCakes" className={styles.footerLogo} />
            </div>
    <div className={styles.secContainer}>
        <div className={[styles.secSide, styles.footerLinks].join(' ')}>
            <div>
                <div className={styles.footerLeft}>
                    <h3 className={styles.subTitle}>
                        Locations
                    </h3>
                    <ul className={styles.footerList}>
                        <li className={styles.footerItem}><NavLink to='#' className={styles.footerLink}>Buea</NavLink></li>
                        <li className={styles.footerItem}><NavLink to='#' className={styles.footerLink}>Limbe</NavLink></li>
                        <li className={styles.footerItem}><NavLink to='#' className={styles.footerLink}>Bamenda</NavLink></li>
                    </ul>
                </div>
                <div className={styles.footerRight}>
                    <h3 className={styles.subTitle}>
                        Protocol
                    </h3>
                    <ul className={styles.footerList}>
                        <li className={styles.footerItem}><NavLink to='#' className={styles.footerLink}>Terms and Condition</NavLink></li>
                        <li className={styles.footerItem}><NavLink to='#' className={styles.footerLink}>Privacy Policy</NavLink></li>
                        {/* <li className={styles.footerItem}><NavLink to='#' className={styles.footerLink}>Careers</NavLink></li> */}
                        {/* <li className={styles.footerItem}><NavLink to='#' className={styles.footerDev}>JB Inc</NavLink></li>
                        <li className={styles.footerItem}><NavLink to='#' className={styles.footerDev}>Jume Brice</NavLink></li> */}
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
        <span className={styles.footerContactsRound}><a href='https://www.facebook.com/jume.njah' target="_blank" rel="noreferrer"><IoLogoFacebook className={styles.footerIcons}/></a></span>
        <span className={styles.footerContactsRound}><a href='tel:237681726633'><IoPhonePortrait className={styles.footerIcons}/></a></span>
        <span className={styles.footerContactsRound}><a href='mailto:bricejume@gmail.com'><IoMail className={styles.footerIcons}/></a></span>
        <span className={styles.footerContactsRound}>
            <a 
                href="https://wa.me/237681726633?text=Good%20day,%20Mr%20Jume%20Brice,%20I'm%20interested%20in%20creating%20a%20baker%20account%20for%20my%20pastry%20business"
                        target="_blank"
                        rel="noreferrer"
            >
                <IoLogoWhatsapp />
            </a></span>
    </div>
    <div className={styles.copyRight}>
        <p>Copyright &copy; of <NavLink to="/admin" className={styles.admin}>JBInc</NavLink></p>
    </div>
</footer>
    )
}

export default Footer;
