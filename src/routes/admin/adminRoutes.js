import React from 'react';

import Admin from '../../components/Admin/';
import AddProduct from '../../components/Admin/AddProduct/';

import {
  Route
} from 'react-router-dom';


const adminRoutes = () => {
    return(
        <React.Fragment>
            <Route exact path="/admin" component={Admin} />
            <Route path="/admin/addproduct" component={AddProduct} />
        </React.Fragment>
    )
}

export default adminRoutes;