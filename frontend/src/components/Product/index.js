import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Header = () => {
    return(
        <div className="app-header">
            <div className="header-items">
     /*
              <HeaderBrand imgIcon={bagIcon}/>
                <HeaderSearch />
                <div className="app-user-info">
                    <HeaderMenu />
                    <HeaderUserItems imgIcon={userIcon} userName="Welcome!"/>
                    <Link to="/viewcart">
                        <HeaderUserItems imgIcon={cartIcon} title="Your orders" />
                    </Link>
                    <HeaderUserItems imgIcon={notificationIcon} title="Your Notifications" />
     */           </div>
            </div>
        </div>
    )
}

export default Header;