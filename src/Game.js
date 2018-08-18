import React from 'react'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const arrAlphabet = alphabet.split('')

const getKeyCode = char => char.toUpperCase().charCodeAt(0)

const firstLetter = getKeyCode('A')
const lastLetter = getKeyCode('Z')

class Game extends React.Component {
  initialState = {
    time: 0,
    ended: false,
    currentPosition: 0,
    msg: 'How fast can you type the alphabet?',
  }

  tick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1,
    }))
  }

  state = this.initialState

  handleKeyDown = ({ keyCode }) => {
    const requiredNextKey = getKeyCode(
      arrAlphabet[this.state.currentPosition]
    )

    if (keyCode === requiredNextKey) {
      this.setState(prevState => ({
        currentPosition: prevState.currentPosition + 1,
        msg: 'go go go!',
      }))

      if (keyCode === firstLetter) {
        this.interval = setInterval(() => this.tick(), 10)
      }

      if (keyCode === lastLetter) {
        clearInterval(this.interval)
        this.setState({
          ended: true,
        })
      }
    }
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
    return (
      <div className="Game">
        <h2>{this.state.msg}</h2>
        {this.state.ended ? (
          <React.Fragment>
            <p>finished!</p>
            <p>it took you {this.state.time / 100} seconds!</p>
            <p>not bad... wanna try again?</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>next key: {arrAlphabet[this.state.currentPosition]}</p>
            <h2>Time: {this.state.time / 100}s</h2>
          </React.Fragment>
        )}
        <button onClick={this.handleRestart}>Play again</button>
      </div>
    )
  }
}

export default Game
