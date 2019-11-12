import React from 'react';
import './addproduct.css';

const AddProduct = () => {
    return(
        <form className="add-product">
            <h1>ADD NEW PRODUCT</h1>
            <div className="input-item-group">
                <div>
                    <label>Product Name: </label>
                    <input type="text" name="product-name" placeholder="example;- apple, carrot.."/>
                </div>
                <div>
                    <label>Product Type: </label>
                    <select>
                        <option>Vegetables</option>
                        <option>Oil</option>
                        <option>Masala</option>
                        <option>Fruits</option>
                        <option>Food Grains</option>
                        <option>Organic Vegetable</option>
                    </select>
                </div>
                <div>
                    <label>Product Image:</label>
                    <input type="file" name="pic" accept="image/*" />
                </div>
            </div>
        </form>
    )
}

export default AddProduct;