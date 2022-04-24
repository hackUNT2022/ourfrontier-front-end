import React, { useState, useEffect } from 'react'
import './ISS.css'
import axios from 'axios'
//import { Wrapper, Status } from '@googlemaps/react-wrapper'




const ISS = () => {
  const [distance, setDistance] = useState(0);
    const instance = axios.create({
        baseURL: 'https://abnormaltech.net',
        timeout: 5000,
    })

    const route = "/iss"
    const interval = setInterval(() => { 
        handleSubmit();
    }, 5000)

    useEffect(() => {
        return () => {
            clearInterval(interval)
        }
    }, [])
    const handleSubmit = async () => {

        instance.get(route)
            .then(function (response) {
                // display as dist to iss
                setDistance(response.data)
                console.log(response)
            })
            .catch(function (error) {
                // handle error
                console.warn("caught error -->", error);
            })
    }

    useEffect(() => {
      console.log(distance)
    }, [distance])

    return (
        <>
            <div className='ISS__container'>
                <div className="ISS__image_container">
                    <img src='https://www.washingtonpost.com/wp-srv/special/national/nasa-iss/img/ISS-2008.png' alt='The international space station' />
                    <h2>THE INTERNATIONAL SPACE STATION </h2>
                </div>
                <div className="ISS__info_container">
                    <div className="ISS__info_content">
                        <h2>This is your distance from the ISS</h2>
                        <h3>{(distance) ? `${distance.toFixed(2)} km` : "Loading"}</h3>
                    </div>
                </div>
            </div>
        </>)
}


export default ISS