import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (<div className=''>
    <Navbar currentPage="home"/>
    <div className='row' style={{ backgroundImage: 'linear-gradient(red, yellow)', width: '100hw', height: '100vh', marginTop: '0px', 
    paddingTop: '0px' }}>
 
      <div className='col-12' style={{ textAlign: 'center' }}>
        <h1 
        style={{ marginTop: '30px', fontSize:'50px', marginBottom:'30px' }}
        >The Ultimate Custom Workout Builder</h1>

        <p style={{ marginRight: 'auto', marginLeft: 'auto', width: '55%', fontSize:'18px' }}>Search through over 1,300 exercises and create a custom workout routine based on the areas you want to target or the home-exercise equipment you have. Everything at Workout Wizard is free. Setup your account or login to access all the exercise information. </p>

      </div>
    <div style={{display: 'flex', justifyContent: 'space-around', flexWrap:'wrap', marginTop:''}}>
      <div  style={{padding:""}} ><img className='img-home img-responsive' src='https://edbv2-ff7foj6vca-uc.a.run.app/image/CmfOWVd7oKriq_' alt='cable reverse curl' /></div>  
      <div style={{padding:""}}> <img className='img-home' src='https://edbv2-ff7foj6vca-uc.a.run.app/image/olQvuloXrLtZbo' alt='skater hops' /></div>   
      <div  style={{padding:""}}> <img className='img-home' src='https://edbv2-ff7foj6vca-uc.a.run.app/image/RoDax1F=DTHGFr' alt='dumbbell decline fly' /></div>    
      </div>


      {/* <p style={{ textAlign: 'center', marginTop: '50px' }}>&#169; Workout Wizard 2023</p> */}

    </div>
  </div>)
}

export default Home
