import React from 'react'

function TimeCounter({ value }) {
  return <span>{new Date(value).toISOString().slice(17, -1)}</span>
}

export default TimeCounter
