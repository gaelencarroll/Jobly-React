import React, {useState, useEffect} from 'react'
import jwt from 'jsonwebtoken'
import {BrowserRouter} from 'react-router-dom'
import JoblyApi from './api/api'
import UserContext from './components/user-components/UserContext/UserContext'
import Navigation from './components/routes-components/Navigation/Navigation'
import Routes from './components/routes-components/Routes/Routes'
import useLocalStorage from './components/hooks/useLocalStorage'

export const TOKEN_ID = 'jobly-token'

function App(){
  const [user, setUser] = useState(null)
  const [userReady, setUserReady] = useState(false)
  const [token, setToken] = useLocalStorage(TOKEN_ID)
  const [appIds, setAppIds] = useState(new Set([]))

  useEffect(function loadUserInfo(){
    console.debug('App useEffect loadUserInfo', 'token=', token)
    async function getUser(){
      if(token){
        try{
          let {username} = jwt.decode(token)
          JoblyApi.token = token
          let user = await JoblyApi.getUser(username);
          setUser(user)
          setAppIds(new Set(user.applications))
        }
        catch(err){
          console.error('Error in loadUserInfo')
          setUser(null)
        }
      }
      setUserReady(true)
    }
    setUserReady(false)
    getUser()
  }, [token])

  async function signup(info){
    try{
      let token = await JoblyApi.signup(info)
      setToken(token)
      return {success: true}
    }
    catch(err){
      console.error('Error in signup', err)
      return {success: false, err}
    }
  }

  async function login(info){
    try{
      let token = await JoblyApi.login(info)
      setToken(token)
      return {success: true}
    }
    catch(err){
      console.error('Error in login', err)
      return {success: false, err}
    }
  }

  function logout(){
    setUser(null)
    setToken(null)
  }

  function hasApplied(id){
    return appIds.has(id)
  }

  function apply(id){
    if(hasApplied(id)){
      return
    }
    else{
      JoblyApi.apply(user.username, id)
      setAppIds(new Set([...appIds, id]))
    }
  }

  return(
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser, hasApplied, apply}}>
        <section className='App'>
          <Navigation logout={logout}></Navigation>
          <Routes signup={signup} login={login}></Routes>
        </section>
      </UserContext.Provider>
    </BrowserRouter>
  )

}

export default App;
