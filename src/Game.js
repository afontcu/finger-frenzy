import React from 'react'

import Button from './Button'
import TimeCounter from './TimeCounter'
import { arrAlphabet } from './utils/alphabet'

function Game(props) {
  return (
    <div className="Game">
      <p>{props.msg}</p>
      {props.ended ? (
        <React.Fragment>
          <p>
            it took you <TimeCounter value={props.time} /> seconds!
          </p>
          <p>not bad... wanna try again?</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p className="Letter">{arrAlphabet[props.currentPosition]}</p>
          <h2>
            Time: <TimeCounter value={props.time} />s
          </h2>
        </React.Fragment>
      )}
      <Button onClick={props.restart}>Play again</Button>
      <p style={{ margin: 0, fontStyle: 'italic' }}>
        (You can also press space)
      </p>
    </div>
  )
}

export default Game
