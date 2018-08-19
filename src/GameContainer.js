import React from 'react'

import Game from './Game'

import {
  arrAlphabet,
  getKeyCode,
  firstLetter,
  lastLetter,
  space,
} from './utils/alphabet'

const huesList = [12, 138, 200, 54]

class GameContainer extends React.Component {
  initialState = {
    time: 0,
    ended: false,
    currentPosition: 0,
    msg: 'How fast can you type the alphabet? Start by pressing "A"!',
    wrong: false,
    letterHue: huesList[huesList.length - 1],
  }

  state = this.initialState

  handleKeyDown = ({ keyCode }) => {
    const requiredNextKey = getKeyCode(
      arrAlphabet[this.state.currentPosition]
    )

    if (keyCode === space) {
      this.handleRestart()
    } else if (keyCode === requiredNextKey) {
      if (keyCode === firstLetter) {
        this.handleFirstLetter()
      }

      if (keyCode === lastLetter) {
        this.handleLastLetter()
      } else {
        this.handleNextLetter()
      }
    } else if (keyCode > firstLetter && keyCode < lastLetter) {
      this.setState({ wrong: true })
      setTimeout(() => {
        this.setState({ wrong: false })
      }, 300)
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
      msg: 'Well done!',
    })
  }

  handleNextLetter = () => {
    this.setState(prevState => ({
      currentPosition: prevState.currentPosition + 1,
      letterHue: huesList[prevState.currentPosition % huesList.length],
    }))
  }

  handleRestart = () => {
    clearInterval(this.interval)
    this.setState(this.initialState)
  }

  componentDidMount() {
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
