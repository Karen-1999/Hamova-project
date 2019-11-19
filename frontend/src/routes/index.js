import React from 'react';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import adminRoutes from'./admin/adminRoutes';


import User from'../components/User/';

const AppRouteComponent = () => {
    return(
        <Router>
            <React.Fragment>
                <Route exact path="/" component={User} />
                <Route path="/admin" component={adminRoutes} />
            </React.Fragment>
        </Router>
    )
}
export default AppRouteComponent;