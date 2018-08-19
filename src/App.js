import React from 'react'
import GameContainer from './GameContainer'
import Background from './Background'
import Header from './Header'
import Footer from './Footer'

import './styles.css'

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
