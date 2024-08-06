import React from 'react'
import image from '../assets/cosmicThreadLogo.png'

function Logo() {
  return (
    <div className='size-16 flex gap-2 p-1 rounded-lg border-white'>
      <img className='' src={image} alt='Cosmic Thread logo'/>
    </div>
  )
}

export default Logo