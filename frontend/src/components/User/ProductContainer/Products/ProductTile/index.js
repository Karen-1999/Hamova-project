import React from 'react';

import PriceDropDown from './PriceDropDown/';

import './ProductTile.css';

const ProductTile = (props) => {
    let {item} = props;
    return(
        <div className="productTile">
            <img className="product-img" src={item.img} alt={item.displayName}/>
            <PriceDropDown prices={item.prices} displayName={item.displayName}/>
        </div>
    )
}

export default ProductTile;