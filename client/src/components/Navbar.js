import React from 'react'
import logo from '../assets/wwlogo.png'
const Navbar = () => {
  return (
    <div style={{ display: 'flex', margin: '0', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', width: '100%' }}>
      <img style= {{ width: '90px'}}src={ logo }/>
      <h2 style={{ marginTop: '30px', fontSize: '35px', fontStyle: 'italic', fontWeight: 'bolder'}}>Workout Wizard</h2>
      </div>
      <div className='nav-btn'>
      <a href='./login' className='nav-btn-ind'>Login</a>

      <a href='./signup' className='nav-btn-ind'>Signup</a>
      </div>
    </div>
  )
}

export default Navbar
