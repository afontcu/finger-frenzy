import React from 'react'
import Finger from './Finger'

function Header() {
  return (
    <div className="Header">
      <Finger />
      <h1 className="Header__title">Finger frenzy!</h1>
      <Finger />
    </div>
  )
}

export default Header
