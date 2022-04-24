import React from 'react'
import "./planet.css"



const Planet = ({name, image}) => {
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
          <h3>{`: ${name}`}</h3>
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