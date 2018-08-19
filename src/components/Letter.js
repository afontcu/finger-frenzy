import React from 'react'

function Letter({ color, value }) {
  const lightColor = `hsl(${color}, 100%, 65%)`
  const darkColor = `hsl(${color}, 100%, 48%)`
  const background = `linear-gradient(110deg,${lightColor} 15%,${darkColor} 15%,${darkColor} 85%,${lightColor} 85%)`

  return (
    <p className="Letter" style={{ background }}>
      {value}
    </p>
  )
}

export default Letter
