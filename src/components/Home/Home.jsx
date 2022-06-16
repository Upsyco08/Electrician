import React from 'react'
import NavBar from '../NavBar/NavBar'
import "./index.scss"
import house from "../../assets/house.jpg"
import TopBar from '../TopBar/TopBar'

function Home() {
  return (
    <>
      <div className="homepage">
        <TopBar /> 
        <NavBar />
          <img className='home-image' src={house} alt="house" />
          <p className='home-uppertext'>we can light everything</p>
          <h1 className='home-lowertext1'>Nothing is</h1>
          <h1 className='home-lowertext2'>Impossible for Us</h1>
          <div className='request'>
            <div className='request-top'>
              <h1>Request Service Today</h1>
            </div>
            <div className='request-bottom'>
              <p>Name</p>
              <p>Email</p>
              <p>Phone</p>
              <p>Date</p>
              <p>Get Service</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home