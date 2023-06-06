import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (<div className=''>
    <Navbar currentPage="home"/>
    <div className='row' style={{ backgroundImage: 'linear-gradient(red, yellow)', width: '100%', height: '100vh', marginTop: '0px', 
    paddingTop: '0px' }}>
 
      <div className='col-12' style={{ textAlign: 'center' }}>
        <h1 
        // style={{ marginTop: '50px' }}
        >The Ultimate Custom Workout Builder</h1>

        <p style={{ marginRight: 'auto', marginLeft: 'auto', width: '55%' }}>Search through over 1,300 exercises and create a custom workout routine based on the areas you want to target or the home-exercise equipment you have. Everything at Workout Wizard is free. Setup your account or login to access all the exercise information. </p>

      </div>
    
      <div className='col-xs-12 col-s-6 col-md-6 col-l-4 col-xl-4' style={{padding:"30px"}} ><img className='img-home img-responsive' src='http://d205bpvrqc9yn1.cloudfront.net/2333.gif' alt='arm slingers hanging straight legs' /></div>  
      <div className='col-xs-12 col-s-6 col-md-6 col-l-4 col-xl-4'style={{padding:"30px"}}> <img className='img-home' src='http://d205bpvrqc9yn1.cloudfront.net/3361.gif' alt='skater hops' /></div>   
      <div className='col-xs-12 col-s-6 col-md-6 col-l-4 col-xl-4' style={{padding:"30px"}}> <img className='img-home' src='http://d205bpvrqc9yn1.cloudfront.net/0301.gif' alt='dumbbell decline bench press' /></div>    



      {/* <p style={{ textAlign: 'center', marginTop: '50px' }}>&#169; Workout Wizard 2023</p> */}

    </div>
  </div>)
}

export default Home
