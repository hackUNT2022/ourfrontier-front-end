import React from 'react'
import './Dropdown.css'
export const Dropdown = ({items, name, childToParent}) => {
  return (
    <div className='dropdown'>
        <button className='main-button'>{name}</button>
        <div className='dropdown-content'>
            {items.map((element) => {
               return <button className='dropdown-button' onClick={() => childToParent(element)}>{element}</button>
            })}
        </div>
    </div>
  )
}
