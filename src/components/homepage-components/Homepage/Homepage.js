import React, {useContext} from 'react'
import './Homepage.css'
import {Link} from 'react-router-dom'
import UserContext from '../../user-components/UserContext'

function Homepage(){
    const {user} = useContext(UserContext);
    console.debug('Homepage', 'user=', user)

    return(
        <section>
            <h1>Jobly</h1>
            {user ? 
                <h2>Welcome back, {user.username}</h2> :
                (<section>
                    <Link to='/login'>Log in</Link>
                    <Link to='/signup'>Create Account</Link>
                </section>)
            }
        </section>
    )
}

export default Homepage;