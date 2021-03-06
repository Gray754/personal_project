//packages
import React from 'react'
import {Switch, Route} from 'react-router-dom'

//Main Site Area
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

//User Side Routes
import UserAccount from './components/UserAccount/UserAccount'
import Dashboard from './components/Dashboard/Dashboard'
import UserApplication from './components/UserApplication/UserApplication'
import SentApplication from './components/SentApplications/SentApplication'

//Admin Side Routes
import AdminPortal from './components/AdminPortal/AdminPortal'
import AdminServiceRequests from './components/AdminServiceRequests/AdminServiceRequests'
import DeniedRequests from './components/AdminServiceRequests/DeniedRequests'
import AcceptedRequests from './components/AdminServiceRequests/AcceptedRequests'

export default (
    <Switch>
        {/* Landing, Login, and Register */}
        <Route exact path='/' component={Landing}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        {/* <Route path='/redirect' component={Redirect}/> */}

        {/* User Side Routes */}
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/dashboard/account' component={UserAccount}/>
        <Route exact path='/dashboard/application' component={UserApplication}/>
        <Route exact path='/dashboard/application/submitted' component={SentApplication}/>

        {/* Admin Side Routes */}
        <Route exact path='/portal' component={AdminPortal}/>
        <Route exact path='/portal/requests' component={AdminServiceRequests}/>
        <Route exact path='/portal/requests/denied' component={DeniedRequests}/>
        <Route exact path='/portal/requests/accepted' component={AcceptedRequests}/>
        {/* <Route exact path='/portal/requests/pending' component={PendingRequests}/> */}
    </Switch>
)