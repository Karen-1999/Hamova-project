import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBrand= (props) => {
    return(
        <div className="app-brand">
            <span>
                <a href="/" className="app-brand-name">Hamova
                </a>
                <img src={require('../../../images/kitchen-logo.png')} className="app-brand-icon" alt="bag"/>
            </span>
        </div>
    )
}

export default HeaderBrand;