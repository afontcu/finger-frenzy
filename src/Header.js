import React from 'react'
import Finger from './Finger'

function Header() {
  return (
    <div className="Header">
      <Finger />
      <div>
        <h1 className="Header__title">Finger frenzy!</h1>
        <p className="Header__tagline">
          How fast can you type the alphabet?
        </p>
      </div>
      <Finger />
    </div>
  )
}

export default Header
