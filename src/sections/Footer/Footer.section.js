import React from 'react';

import './Footer.section.css';
import {jbInc, logo8} from '../../res/img';

const Footer = () => {
    return (
        <footer className="sec-footer footer">
            <div className="footer__logo-box">
                <img src={logo8} alt="CaraCakes" className="footer__logo" />
            </div>
    <div className="row margin-top-medium-ve">
        <div className="col-1-2 footer__links">
            <div>
                <div className="footer__left">
                    <h3 className="title-lil-2">
                        Locations
                    </h3>
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Buea</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Limbe</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Bamenda</a></li>
                    </ul>
                </div>
                <div className="footer__right">
                    <h3 className="title-lil-2">
                        Protocol
                    </h3>
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Terms and Condition</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Privacy Policy</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                        <li className="footer__item"><a href="#" className="footer__dev">JB Inc</a></li>
                        <li className="footer__item"><a href="#" className="footer__dev">Jume Brice</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-1-2">
            <div className="footer__creator">
                <div className="footer__creator--box">
                    <img src={jbInc} alt="Creator" className="footer__image" />
                </div>
            </div>
        </div>
    </div>
    <div className="footer__contacts">
        <span className="footer__contacts--round"><a href="#" className="fab fa-facebook"></a></span>
        <span className="footer__contacts--round"><a href="#" className="fab fa-twitter"></a></span>
        <span className="footer__contacts--round"><a href="#" className="fab fa-instagram"></a></span>
        <span className="footer__contacts--round"><a href="#" className="fas fa-envelope"></a></span>
    </div>
    <div className="txt-cnt margin-top-small">
        <p className="para">Copyright &copy; of JBInc</p>
    </div>
</footer>
    )
}

export default Footer;
