import React from 'react';
//import FilterComponent from './FilterComponent/FilterComponent';
import Products from './Products/';
import './productcontainer.css';

const ProductContainer = () => {
    return(
        <div className="product-container-panel">
            {/*<div className="product-filter-panel">
                <FilterComponent />
            </div>*/}
            <div className="products-panel">
                <Products />
            </div>
        </div>
    )
}

export default ProductContainer;