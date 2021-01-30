import React from 'react'

import weatherClouds from '../assets/images/weather-clouds.svg'

const Home = () => {
  return (
    <div>
      <h1>Tekirdag, Turkey</h1>
      <p>Sunday, 1 AM</p>
      <img src={ weatherClouds } />
      <h3>28&#176;</h3>
      <div>
        Last 3 days
      </div>
      <div>
        Today
      </div>
      <div>
        Next 3 days
      </div>
    </div>
  )
}

export default Home
