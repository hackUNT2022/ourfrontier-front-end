import React, { useEffect } from 'react'
import "./planet.css"
import axios from 'axios'


const Planet = ({name, image}) => {

  const instance = axios.create({
    baseURL: 'https://solarsystem.nasa.gov',
    timeout: 1000,
    headers: {
      'Access-Control-Allow-Origin': 'origin',
    }
  })

  // const getDistanceBetweenCelestialBodies = async (b1, b2) => {
  //   function monthConvert(month) {
  //     if (month === "Jan") return "01"
  //     if (month === "Feb") return "02"
  //     if (month === "Mar") return "03"
  //     if (month === "Apr") return "04"
  //     if (month === "May") return "05"
  //     if (month === "Jun") return "06"
  //     if (month === "Jul") return "07"
  //     if (month === "Aug") return "08"
  //     if (month === "Sep") return "09"
  //     if (month === "Oct") return "10"
  //     if (month === "Nov") return "11"
  //     if (month === "Dec") return "12"
    
  //   }

  //   const currentTime = new Date(Date.now())
  //   const fiveMinTime = new Date(Date.now() + (300*1000))

  //   const vals1 = currentTime.toUTCString().split(" ");
  //   const vals2 = fiveMinTime.toUTCString().split(" ");

  //   let t1 = `${vals1[3]}-${monthConvert(vals1[2])}-${vals1[1]}T${vals1[4]}`
  //   t1.slice(0, -1)
  //   t1.slice(0, -1)
  //   t1 += "0"

  //   let t2 = `${vals2[3]}-${monthConvert(vals2[2])}-${vals2[1]}T${vals2[4]}`
  //   t2.slice(0, -1)
  //   t2.slice(0, -1)
  //   t2 += "0"

  //   // https://solarsystem.nasa.gov/spice_data/getRangefromT1/EARTH/NEPTUNE/2022-04-23T23:58:0/2022-04-24T00:05:0/4/
  //   const route = `/spice_data/getRangefromT1/${b1.toUpperCase()}/${b2.toUpperCase()}/${t1}/${t2}/1/`

  //   instance.get(route, { crossDomain: true })
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })


  // }

  return (
    <section className='Planet__container' id={name}> 
      <div className='Planet__container-top'>
        <div className='Planet__image-container'>
          <img className='Planet__image' src={image} alt={`The planet ${name}`}/>

        </div>
        <div className='Planet__stats-container'>
          <h1>{name}</h1>
          <h3>{`Distance from Earth: ${name}`}</h3>
          <h3>{`Weather: ${name}`}</h3>
          <h3>{`Distance from the Earth: ${name}`}</h3>
        </div>
      </div>
      <div className='Planet__container-bottom'>
        <div className='Planet__info_card'> 
          <h2>Additional Info</h2>
        </div>
      </div>
    </section>
  )
}

export default Planet