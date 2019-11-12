import React from 'react';

const HeaderSearch = (props) => {
    return(
        <div className="app-search">
            <input className="search-box" type="text" placeholder="Search for products of Armenian kitchen"/>
            <button type="button" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>    
    )
}

export default HeaderSearch;