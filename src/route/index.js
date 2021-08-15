import React, {Fragment} from 'react'
import { Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";
//------
import Dashboard from "../components/Dashboard";
import CompanyDetail from "../components/CompanyDetail";
import DepartmentDetail from "../components/DepartmentDetail";
import UserDetail from "../components/UserDetail";

import NotFound from "../components/PageNotFound";
function AppRouter() {
  return (
    <Fragment>
      <Switch>      
        <PublicRoute restricted={true} exact path='/' component={Login} />
        <PublicRoute restricted={true} path="/login" component={Login} />
        <PublicRoute restricted={true} path="/forgot-password" component={ForgotPassword} />
        <PublicRoute restricted={true} path="/reset-password/:token" component={ResetPassword} />

        <PrivateRoute path="/dashboard" component={Dashboard} />      
        <PrivateRoute path="/property-detail/:id" component={CompanyDetail} />      
        <PrivateRoute path="/user-detail/:id" component={UserDetail} />      
        <PrivateRoute path="/departments" component={Dashboard} />      
        <PrivateRoute path="/users" component={Dashboard} />      
        <PublicRoute component={NotFound} />
      </Switch>
    </Fragment>
  );
}

export default AppRouter;
