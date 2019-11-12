import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBrand= (props) => {
    return(
        <div className="app-brand">
            <span>
                <Link to="/" className="app-brand-name">Hamova
                </Link>
                <img src={props.imgIcon} className="app-brand-icon" alt="bag"/>
            </span>
        </div>
    )
}

export default HeaderBrand;