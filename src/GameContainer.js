import React from 'react'

import Game from './Game'

import {
  arrAlphabet,
  getKeyCode,
  firstLetter,
  lastLetter,
  space,
} from './utils/alphabet'

class GameContainer extends React.Component {
  initialState = {
    time: 0,
    ended: false,
    currentPosition: 0,
    msg: 'Ready? Start by pressing "A"!',
  }

  state = this.initialState

  handleKeyDown = ({ keyCode }) => {
    const requiredNextKey = getKeyCode(
      arrAlphabet[this.state.currentPosition]
    )

    if (keyCode === space) {
      this.handleRestart()
    }

    if (keyCode === firstLetter) {
      this.handleFirstLetter()
    }

    if (keyCode === lastLetter) {
      this.handleLastLetter()
    }

    if (keyCode === requiredNextKey && keyCode !== lastLetter) {
      this.setState(prevState => ({
        currentPosition: prevState.currentPosition + 1,
      }))
    }
  }

  handleFirstLetter = () => {
    const startTime = Date.now()

    this.setState({ msg: 'go go go!' })

    this.interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      this.setState({ time: elapsedTime })
    }, 10)
  }

  handleLastLetter = () => {
    clearInterval(this.interval)
    this.setState({
      ended: true,
      msg: 'yay! you finished!',
    })
  }

  handleRestart = () => {
    clearInterval(this.interval)
    this.setState(this.initialState)
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false)
  }

  render() {
    return <Game {...this.state} restart={this.handleRestart} />
  }
}

export default GameContainer
