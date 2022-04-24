import React from 'react'
import './ISS.css'
import { Wrapper, Status } from '@googlemaps/react-wrapper'

const ISS = () => {
  return (
    <div className='ISS__container'>
      <div className="ISS__image_container">
        <img src='https://www.washingtonpost.com/wp-srv/special/national/nasa-iss/img/ISS-2008.png' alt='The international space station' />
        <h2>THE INTERNATIONAL SPACE STATION </h2>
      </div>
      <div className="ISS__info_container">
        <div className="ISS__info_content">
          <h2>Here are some cool things about the ISS</h2>
        </div>
      </div>
    </div>
  )
}

export default ISS