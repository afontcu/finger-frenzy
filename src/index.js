import React from 'react'
import ReactDOM from 'react-dom'
import Game from './Game'
import Background from './Background'
import Header from './Header'

import './styles.css'

class App extends React.Component {
  render() {
    return (
      <Background>
        <Header />
        <Game />
      </Background>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
