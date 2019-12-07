import React from "react";
import './PriceDropDown.css';

class PriceDropDown extends React.Component {
    constructor(props){
        super(props);
        this.state={
            productDiscount:props.prices[0].discount,
            price:props.prices[0].price,
        }
    }
    handleProductDiscountChange = (index) => {
        this.setState({
            productDiscount:this.props.prices[index].discount, 
            price:this.props.prices[index].price});
    }
    render(){
        return (
            <React.Fragment>
                <div className="product-pricing">
                    <button className="product-discount">Hot food!</button>
                </div>
                <select className="product-price-dd" onChange={(e)=>this.handleProductDiscountChange(e.target.value)}>
                    {
                        this.props.prices.map((price,index) => {
                            return(
                             <option key={price.id} value={index}>
                                {price.quantity+ " - Rub" +
                                price.price}
                             </option>
                            )
                        })     
                    }
                </select>
            </React.Fragment>
        )
    }
}

export default PriceDropDown;