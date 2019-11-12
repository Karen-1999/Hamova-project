import React from 'react';

import Navbar from './Navbar/';
import HeaderUserItems from './HeaderUserItems/';
import HeaderMenu from './HeaderMenu/';
import HeaderSearch from './HeaderSearch/';
import HeaderBrand from './HeaderBrand/';

import bagIcon from "../../images/bag-icon-2.png";
import notificationIcon from "../../images/notification-icon3.png";
import cartIcon from "../../images/cart-icon-6.png";
import userIcon from "../../images/user-icon-1.png";

import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return(
        <div className="app-header">
            <div className="header-items">
                <HeaderBrand imgIcon={bagIcon}/>
                <HeaderSearch />
                <div className="app-user-info">
                    <HeaderMenu />
                    <HeaderUserItems imgIcon={userIcon} userName="Welcome!"/>
                    <Link to="/viewcart">
                        <HeaderUserItems imgIcon={cartIcon} title="Your orders" />
                    </Link>
                    <HeaderUserItems imgIcon={notificationIcon} title="Your Notifications" />
                </div>  
            </div>
            <Navbar />
        </div>
    )
}

export default Header;