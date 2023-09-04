import React, {useContext} from 'react'
import './Navigation.css'
import {Link, NavLink} from 'react-router-dom'
import UserContext from '../../user-components/UserContext'

function Navigation({logout}){
    const {user} = useContext(UserContext)
    console.debug('Navigation', 'user=', user)

    function loggedIn(){
        return(
            <section>
                <ul>
                    <li><NavLink to='/jobs'>Jobs</NavLink></li>
                    <li><NavLink to='/companies'>Companies</NavLink></li>
                    <li><NavLink to='/profile'>Profile</NavLink></li>
                    <li><NavLink to='/' onClick={logout}>Logout {user.username}</NavLink></li>
                </ul>
            </section>
        )
    }
    function loggedOut(){
        return(
            <section>
                <ul>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/signup'>Create Account</NavLink></li>
                </ul>
            </section>
        )
    }

    return(
        <section>
            <Link to='/'>Jobly</Link>
            {user ? loggedIn() : loggedOut()}
        </section>
    )
}

export default Navigation;