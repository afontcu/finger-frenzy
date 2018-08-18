import React from 'react'
import ReactDOM from 'react-dom'

import GameContainer from './GameContainer'
import Background from './Background'
import Header from './Header'
import Footer from './Footer'

import './styles.css'

class App extends React.Component {
  render() {
    return (
      <Background>
        <Header />
        <GameContainer />
        <Footer />
      </Background>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
