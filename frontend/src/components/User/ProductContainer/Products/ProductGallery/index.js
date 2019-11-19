import React from 'react';

import ProductTile from '../ProductTile/';
import './ProductGallery.css';

const ProductGallery = (props) => {
    let productList = props.data;
    return(
        <div className="productGallery">
            {productList.map((item,index)=>{
                return(
                    <ProductTile key={index} item={item}/>
                ) 
            })}
        </div>
    )
}

export default ProductGallery;