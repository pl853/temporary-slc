import React from 'react';
import * as ROUTES from '../../routes';

import {Route, BrowserRouter, Switch, Redirect } from "react-router-dom";


import AuthLayout from "layouts/Auth/Auth.jsx";
import AdminLayout from "layouts/Admin/Admin.jsx";

import "assets/css/nucleo-icons.css";
import "assets/scss/Site.scss?v=1.0.0";
import "react-notification-alert/dist/animate.css";

import { withAuthentication } from '../Session';



const App = () => (
  <BrowserRouter >
    <div>
      <Switch>
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Route path="/home" render={props => <AdminLayout {...props} />} />
        <Redirect from="/" to={ROUTES.START_PAGE} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default withAuthentication(App);
