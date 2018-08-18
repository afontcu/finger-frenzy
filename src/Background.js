import React from 'react'

/**
 * This beauties are not mine. I took the from this codepen:
 * https://codepen.io/Octavector/pen/akEZwG
 * all credit goes to him/her!
 */
const backgrounds = [
  {
    backgroundImage:
      'linear-gradient(45deg, #004C66, #004C66 1em, #008C74 1em, #008C74 50%)',
    backgroundSize: '1.4em 1.4em',
  },
  {
    backgroundImage:
      'repeating-linear-gradient(45deg, transparent, transparent 1em, #731630 1em, #731630 50%), repeating-linear-gradient(45deg, #40152A, #40152A 1em, #FF5434 1em, #FF5434 50%)',
    backgroundSize: '3em 3em, 2em 2em',
  },
  {
    backgroundImage:
      'repeating-linear-gradient(-45deg, transparent, transparent 1em, #9E2053 1em, #9E2053 50%), repeating-linear-gradient(45deg, #111626, #111626 1em, #571B3D 1em, #571B3D 50%)',
    backgroundSize: '3em 3em, 2em 2em',
  },
  {
    backgroundImage:
      'radial-gradient(ellipse  4em 4em , #BEDB39, #BEDB39 25%, #1F8A70 25%)',
    backgroundSize: '2em 2em',
  },
  {
    backgroundImage:
      'radial-gradient(ellipse  100% 100% , #013440, #013440 25%, transparent 25%),radial-gradient(ellipse  50% 50% , #AB1A25, #AB1A25 25%, #002635 25%)',
    backgroundSize: '1em 1em, 2em 2em',
  },
  {
    backgroundImage:
      'radial-gradient(ellipse farthest-corner at 2em 2em , #FF9E9D, #FF9E9D 50%, #FF3D7F 50%)',
    backgroundSize: '2em 2em',
  },
]

function Background({ children }) {
  return (
    <div
      className="Background"
      style={backgrounds[Math.floor(Math.random() * backgrounds.length)]}
    >
      {children}
    </div>
  )
}

export default Background
