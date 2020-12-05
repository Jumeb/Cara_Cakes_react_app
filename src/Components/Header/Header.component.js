import React, { useState } from 'react';

import './Header.style.css';
import {Links} from '../../Components';
import logo from "../../res/img/caracakes2.png";

const Header = (props) => {
    const [active, setActive] = useState(1)
    return (
        <div className="container">
            <img src={logo} alt="CaraCakes" className="container__logo" />
             {/* <nav className="container__nav">
                 <ul className="container__nav--list">
                    {links.map((link, index) => <Links data={link} />)}
                 </ul>
             </nav> */}
        </div>
    )
};
    
export default Header;

const links = [
    {id: 1, listStyles:"container__nav--item home", title: 'Home', link:"#home", styles:"container__nav--link"},
    {id: 2, listStyles:"container__nav--item offers", title: 'Offers', link:"#offers", styles:"container__nav--link"},
    {id: 3, listStyles:"container__nav--item flvs", title: 'Flavours', link:"#flvs", styles:"container__nav--link"},
    {id: 4, listStyles:"container__nav--item stry", title: 'Stories', link:"#stry", styles:"container__nav--link"},
    {id: 5, listStyles:"container__nav--item information", title: 'Info', link:"#info", styles:"container__nav--link"},
    {id: 6, listStyles:"container__nav--item gall", title: 'Gallery', link:"#gall", styles:"container__nav--link"},
    {id: 7, listStyles:"container__nav--item", title: 'Login', link:"/login", styles:"container__nav--link"},
    {id: 8, listStyles:"container__nav--item", title: 'Sign-up', link:"/signup", styles:"container__nav--link"},
    {id: 9, listStyles:"container__nav--item", title: 'AdminIndex', link:"/admin", styles:"container__nav--link"},
]