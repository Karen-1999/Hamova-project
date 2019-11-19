import React from 'react';

import ProductPath from './ProductPath/';
import ProductGallery from './ProductGallery/';
import data from '../../../../server/products';

import "./Products.css"

const Products = (props) => {
    return(
        <div className="products">
            <ProductPath />
            <ProductGallery data={data} />
        </div>
    )
}

export default Products;