import React from 'react'

function ShareTime({ time }) {
  const text = `I typed the whole alphabet in ${time} seconds! Can you beat me? https://finger-frenzy.netlify.app/ 👈👈👈`
  const url = `https://twitter.com/intent/tweet?text=${text}`

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      Share my amazing result on Twitter
    </a>
  )
}

export default ShareTime
