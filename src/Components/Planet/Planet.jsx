import React, { useEffect, useState } from 'react'
import "./planet.css"
import axios from 'axios'
import { blurbs } from '../../Data/Terms';


const Planet = ({name, image}) => {
  const [data, setData] = useState([0]);
  const [time, setTime] = useState(Date.now());
  const [index, setIndex] = useState(0);
  const [planetData,setPlanetData] = useState([0,0,0,0,0])

  const interval = setInterval(() => {
      setTime(Date.now())
      setIndex(index+2)
    }, 2000)

  useEffect(() => {
    console.log("hi")
    return () => {
      clearInterval(interval)
    }
  }, [])

  const instance = axios.create({
    baseURL: 'https://abnormaltech.net',
    timeout: 5000,
  })

  const getDistanceBetweenCelestialBodies = async (b1, b2) =>  {

    function monthConvert(month) {
      if (month === "Jan") return "01"
      if (month === "Feb") return "02"
      if (month === "Mar") return "03"
      if (month === "Apr") return "04"
      if (month === "May") return "05"
      if (month === "Jun") return "06"
      if (month === "Jul") return "07"
      if (month === "Aug") return "08"
      if (month === "Sep") return "09"
      if (month === "Oct") return "10"
      if (month === "Nov") return "11"
      if (month === "Dec") return "12"
    
    }

    const currentTime = new Date(Date.now())
    const fiveMinTime = new Date(Date.now() + (300*1000))

    const vals1 = currentTime.toUTCString().split(" ");
    const vals2 = fiveMinTime.toUTCString().split(" ");

    let t1 = `${vals1[3]}-${monthConvert(vals1[2])}-${vals1[1]}T${vals1[4]}`
    t1.slice(0, -1)
    t1.slice(0, -1)
    t1 += "0"

    let t2 = `${vals2[3]}-${monthConvert(vals2[2])}-${vals2[1]}T${vals2[4]}`
    t2.slice(0, -1)
    t2.slice(0, -1)
    t2 += "0"

    // abnormaltech.net/get_planet_data?p1=MERCURY&p2=NEPTUNE&t1=2022-04-23T23:58:0&t2=2022-04-24T00:050
    const route = `/get_planet_data?p1=${b1.toUpperCase()}&p2=${b2.toUpperCase()}&t1=${t1}&t2=${t2}`

    instance.get(route)
    .then(function (response) {
      // handle success
      setData(response.data.items)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    
    console.log(data)
  }

 

  useEffect(() => {
    getDistanceBetweenCelestialBodies(name, "earth")
     instance.get('/bodies')
    .then((response) =>{
      let pData = response.data;
      for(const body in pData)
      {
        if (pData[body][0] === name){
          setPlanetData(pData[body])
          console.log(pData[body])
        }
      }

    })
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <section className='Planet__container' id={name}> 
      <div className='Planet__container-top'>
        <div className='Planet__image-container'>
          <img className='Planet__image' src={image} alt={`The planet ${name}`}/>
        </div>
        <div className='Planet__stats-container'>
          <h1>{name}</h1>
          <h3>{`Classification: Planet`}</h3>
          <h3>{`Mass: ${planetData[2]["massValue"] * 10 ** planetData[2]["massExponent"]}kg`}</h3>
          <h3>{`Distance from the Earth: ${data[index].value} KM`}</h3>
          <h3>{`Escape Velocity: ${planetData[5]} m/s`}</h3>
        </div>
      </div>
      <div className='Planet__container-bottom'>
        <div className='Planet__info_card'> 
          <h2>Additional Info</h2>
          <span className='Planet__info'>Average Gallons of Gas To Travel: </span> {`${(data[index].value/25.4).toFixed(2)}`}<br></br>
          <span className='Planet__info'>Estimated Cost of Gas: </span> {`${(data[index].value/25.4 * 3.780).toFixed(2)}`}
          <p>{blurbs[name]}</p>
        </div>
        
      </div>
    </section>
  )
}

export default Planet