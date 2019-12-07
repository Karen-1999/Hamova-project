import React from 'react';

import PriceDropDown from './PriceDropDown/';

import './ProductTile.css';

const ProductTile = (props) => {
    let {item} = props;
    return(
        <form className="productTile">
            <a href={'../meal/' + item.displayName}>{item.displayName}</a>
            <img className="product-img" src={item.img} alt={item.displayName}/>
            <PriceDropDown prices={item.prices} displayName={item.displayName}/>
        </form>
    )
}

export default ProductTile;