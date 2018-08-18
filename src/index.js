import React from 'react'
import ReactDOM from 'react-dom'
import Game from './Game'
import Background from './Background'

import './styles.css'

class App extends React.Component {
  render() {
    return (
      <Background>
        <span role="img" aria-label="" style={{ display: 'none' }}>
          👇👇👇👇👇👇
        </span>
        <h1 className="Title">Finger frenzy!</h1>
        <Game />
      </Background>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
