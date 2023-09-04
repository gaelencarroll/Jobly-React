import React, {useState, useContext} from 'react'
import './Profile.css'
import JoblyApi from '../../../api/api'
import Alert from '../../extra-components/Alert'
import UserContext from '../../user-components/UserContext'


function Profile(){
    const [currUser, setCurrUser] = useContext(UserContext);
    const [savedMsg, setSavedMsg] = useState(false)
    const [errors, setErrors] = useState([])
    const [userInfo, setUserInfo] = useState({
        firstName : currUser.firstName,
        lastName : currUser.lastName,
        email : currUser.email,
        username : currUser.username, 
        password : ''
    })

    function handleChange(e){
        const {name, value} = e.target;
        setUserInfo(i => ({...i, [name]:value}))
        setErrors([])
    }

    async function handleSubmit(e){
        e.preventDefault();
        let profileInfo = {
            firstName : userInfo.firstName,
            lastName : userInfo.lastName,
            email: userInfo.email,
            password: userInfo.password
        }
        let username = userInfo.username
        let user;
        try{
            user = await JoblyApi.saveProfile(username, profileInfo)
        }
        catch(err){
            setErrors(err)
            return
        }
        setErrors([])
        setSavedMsg(true)
        setUserInfo(i => ({...i, password: ''}))
        setCurrUser(user)
    }

    return(
        <section>
            <h2>User Profile</h2>
            <form>
                <section>
                    <p>Username: {userInfo.username}</p>
                </section>
                <section>
                    <label>First Name</label>
                    <input value={userInfo.firstName} onChange={handleChange} name='firstName'></input>
                </section>
                <section>
                    <label>Last Name</label>
                    <input value={userInfo.lastName} onChange={handleChange} name='lastName'></input>
                </section>
                <section>
                    <label>Email</label>
                    <input value={userInfo.email} onChange={handleChange} name='email'></input>
                </section>
                <section>
                    <label>Password</label>
                    <input value={userInfo.password} onChange={handleChange} name='password' type='password'></input>
                </section>

                {errors.length ? 
                <Alert type='danger' messages={errors}></Alert> :
                null}

                {savedMsg ? 
                <Alert type='success' messages={['Profile updated']}></Alert> :
                null}

                <button onClick={handleSubmit}>Save Profile</button>
            </form>
        </section>
    )

}

export default Profile;