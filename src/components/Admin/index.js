import React from 'react';
import { Link } from'react-router-dom';
class Admin extends React.Component {
    render(){
        return(
            <div>
                <h3>Hamova admin</h3>
                <ul>
                    <li><Link to="/admin/AddNewProduct">Add New Product</Link></li>
                    <li><Link to="/admin/AllProducts">View all Product</Link></li>
                    <li><Link to="/admin/UpdateProduct">Update Product</Link></li>
                </ul>
            </div>
        )
    }
}

export default Admin;