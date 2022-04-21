import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



import NetworkProvider from './api/ContextApi'
// import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './Pages/Home/Home'
import Navbar from './Pages/navbar/Navbar'
import Profile from './Pages/navbar/Profile'
import Setting from './Pages/navbar/profileChildren/Settings'
import UpdateProfile from './Pages/navbar/profileChildren/UpdateProfile'
import UploadPhoto from './Pages/navbar/profileChildren/UploadPhoto'
const App = () => {
  return (
    <div>
      <NetworkProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='' element={<Home/>}/>
          {/* <Route path='/login' element={<Login/>} /> */}
          <Route path='/profile' element={<Profile />}>
            <Route path='/profile/uploadPhoto' element={<UploadPhoto/>}/>
            <Route path='/profile/updateProfile' element={<UpdateProfile/>}/>
            <Route path='/profile/setting' element={<Setting/>}/>
            </Route>
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
      </NetworkProvider>
      
    </div>
  )
}

export default App