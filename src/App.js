import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeAdmin from './components/admin/Home'
import HomeUser from './components/localclents/Home'

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
        </Routes>
      </>
    )
  }
}

export default App
