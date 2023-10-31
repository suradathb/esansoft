import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeAdmin from './components/admin/menu/Home'
import HomeUser from './components/localclents/Home'
import AdminLogin from './components/admin/auth/AdminLogin'
import AdminRegister from './components/admin/auth/AdminRegister'
import Profile from './components/admin/profile/Profile'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
    }
  }
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<HomeUser/>}/>
          <Route path="/admin" element={<HomeAdmin/>} />
          <Route path='/login' element={<AdminLogin/>}/>
          <Route path='/register' element={<AdminRegister/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </>
    )
  }
}

export default App
