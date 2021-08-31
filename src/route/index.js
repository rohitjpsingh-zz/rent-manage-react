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
        <PublicRoute exact path='/' component={Login} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/forgot-password" component={ForgotPassword} />
        <PublicRoute path="/reset-password/:token" component={ResetPassword} />

        <PublicRoute path="/dashboard" component={Dashboard} />      
        <PublicRoute path="/property-detail/:id" component={CompanyDetail} />      
        <PublicRoute path="/user-detail/:id" component={UserDetail} />      
        <PublicRoute path="/departments" component={Dashboard} />      
        <PublicRoute path="/users" component={Dashboard} />      
        <PublicRoute component={NotFound} />
      </Switch>
    </Fragment>
  );
}

export default AppRouter;
