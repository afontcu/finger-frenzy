import React from 'react'
import Button from './Button'
import TimeCounter from './TimeCounter'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const arrAlphabet = alphabet.split('')

const getKeyCode = char => char.toUpperCase().charCodeAt(0)

const firstLetter = getKeyCode('A')
const lastLetter = getKeyCode('Z')
const space = getKeyCode(' ')

class Game extends React.Component {
  initialState = {
    time: 0,
    ended: false,
    currentPosition: 0,
    msg: 'Ready? Start by pressing "A"!',
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

    if (keyCode === space) {
      this.handleRestart()
    }

    if (keyCode === requiredNextKey) {
      this.setState(prevState => ({
        currentPosition: prevState.currentPosition + 1,
        msg: 'go go go!',
      }))

      if (keyCode === firstLetter) {
        var startTime = Date.now()

        this.interval = setInterval(function() {
          var elapsedTime = Date.now() - startTime
          this.setState({
            time: elapsedTime,
          })
        }, 100)
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
        <p>{this.state.msg}</p>
        {this.state.ended ? (
          <React.Fragment>
            <p>
              it took you
              <TimeCounter value={this.state.time} />seconds!
            </p>
            <p>not bad... wanna try again?</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p className="Letter">{arrAlphabet[this.state.currentPosition]}</p>
            <h2>
              Time: <TimeCounter value={this.state.time} />s
            </h2>
          </React.Fragment>
        )}
        <Button onClick={this.handleRestart}>Play again</Button>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          (You can also press space)
        </p>
      </div>
    )
  }
}

export default Game
