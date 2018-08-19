import React from 'react'
import GameContainer from './components/GameContainer'
import Background from './components/Background'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/styles.css'

function App() {
  return (
    <Background>
      <Header />
      <GameContainer />
      <Footer />
    </Background>
  )
}

export default App
