import React from 'react'
import './Routes.css'
import {Redirect, Switch, Route} from 'react-router-dom'
import Homepage from '../../homepage-components/Homepage'
import PrivateRoute from '../PrivateRoute'
import SignUpForm from '../../user-components/SignUpForm'
import LoginForm from '../../user-components/LoginForm'
import Profile from '../../profile-components/Profile'
import JobList from '../../job-components/JobList'
import CompanyList from '../../company-components/CompanyList'
import CompanyInfo from '../../company-components/CompanyInfo'

function Routes({login, signup}){
    return(
        <section>
            <Switch>
                <Route exact path='/'>
                    <Homepage></Homepage>
                </Route>
                <Route exact path='/login'>
                    <LoginForm login={login}></LoginForm>
                </Route>
                <Route exact path='/signup'>
                    <SignUpForm signup={signup}></SignUpForm>
                </Route>
                <PrivateRoute exact path='/jobs'>
                    <JobList></JobList>
                </PrivateRoute>
                <PrivateRoute exact path='/companies'>
                    <CompanyList></CompanyList>
                </PrivateRoute>
                <PrivateRoute exact path='/companies/:handle'>
                    <CompanyInfo></CompanyInfo>
                </PrivateRoute>
                <PrivateRoute path='profile'>
                    <Profile></Profile>
                </PrivateRoute>
                <Redirect to='/'></Redirect>
            </Switch>
        </section>
    )
}

export default Routes;