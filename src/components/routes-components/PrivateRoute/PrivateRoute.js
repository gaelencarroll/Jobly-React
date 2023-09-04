import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import UserContext from '../../user-components/UserContext'

function PrivateRoute({exact, path, children}){
    const {user} = useContext(UserContext)

    if(!user){
        return(
            <Redirect to='/login'></Redirect>
        )
    }
    return (
        <Route exact={exact} path={path}>{children}</Route>
    )
}

export default PrivateRoute;