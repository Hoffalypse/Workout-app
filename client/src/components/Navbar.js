import React, { useState } from 'react'
import logo from '../assets/wwlogo.png'
import {useNavigate} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Navbar = ({ currentPage }) => {

  let navigate = useNavigate()

  const renderLink = () => {
    switch (currentPage) {
      case "signup":
        return (<div className='nav-btn'>
          <Button className='nav-btn-ind' onClick={() => navigate('/')}>Home</Button>
          <Button className='nav-btn-ind' onClick={() => navigate('/login')}>Login</Button>
        </div>);
      case "login":
        return (<div className='nav-btn'>
          <Button className='nav-btn-ind' onClick={() => navigate('/')}>Home</Button>
          <Button className='nav-btn-ind' onClick={() => navigate('/signup')}>Signup</Button>
    </div>)
      case "search":
        return (<div className='nav-btn'>
          <Button className='nav-btn-ind' onClick={() => navigate('/profile')}>Profile</Button>
          <Button className='nav-btn-ind' onClick={() => navigate('/')}>Logout</Button>
          
        </div>)
        case "Profile":
          return (<div className='nav-btn'>
              <Button className='nav-btn-ind' onClick={() => navigate('/search')}>Search</Button>
          <Button className='nav-btn-ind' onClick={() => navigate('/')}>Logout</Button>
            </div>)
      case "home":
        return (<div className='nav-btn'>
          <Button className='nav-btn-ind' onClick={() => navigate('/login')}>Login</Button>
          <Button className='nav-btn-ind' onClick={() => navigate('/signup')}>Signup</Button>
  
        </div>)
    }
  }
  return (

    <div style={{ backgroundImage: 'linear-gradient(yellow, red)', width: '100%', height: '100%' }} >

      <div style={{ display: 'flex', margin: '0', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <img style={{ width: '90px' }} src={logo} />
          <h2 style={{ marginTop: '30px', fontSize: '35px', fontStyle: 'italic', fontWeight: 'bolder' }}>Workout Wizard</h2>
        </div>
        {renderLink()}
        {/* <div className='nav-btn'>
            <a href='./profile' className='nav-btn-ind' >Profile</a>
            <a href='./search' className='nav-btn-ind' >Search</a>
            <a href='./' className='nav-btn-ind'>Logout</a>
          </div>
          :
          <div className='nav-btn'>
            <a href='./login' className='nav-btn-ind'>Login</a>

            <a href='./signup' className='nav-btn-ind'>Signup</a>
          </div> */}
      </div>
    </div>
  )
}
export default Navbar
