import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}  />
        <Route path='/login' element={<UserLogin/>}  />
        <Route path='/riding' element={<Riding/>}/>
        <Route path='/signup' element={<UserSignUp/>}  />
        <Route path='/captain-login' element={<CaptainLogin/>}  />
        <Route path='/captain-signup' element={<CaptainSignup/>}  />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        }   />
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        }/>
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome/>
          </CaptainProtectWrapper>
        }/>
        <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout/>
          </CaptainProtectWrapper>
        }/>
         <Route path='/captain-riding' element={
          <CaptainProtectWrapper>
            <CaptainRiding/>
          </CaptainProtectWrapper>
        }/>

      </Routes>
    </div>
  )
}

export default App