import React from 'react'
import { ShakeHorizontal } from 'reshake'

import Button from './Button'
import TimeCounter from './TimeCounter'
import { arrAlphabet } from './utils/alphabet'

function Game({ msg, ended, currentPosition, time, restart, wrong }) {
  return (
    <div className="Game">
      <p>{msg}</p>
      {ended ? (
        <React.Fragment>
          <p>
            it took you <TimeCounter value={time} /> seconds!
          </p>
          <p>not bad... wanna try again?</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ShakeHorizontal trigger={wrong ? null : 'active'} q={1}>
            <p className="Letter">{arrAlphabet[currentPosition]}</p>
          </ShakeHorizontal>
          <h2>
            Time: <TimeCounter value={time} />s
          </h2>
        </React.Fragment>
      )}
      <Button onClick={restart}>Play again</Button>
      <p style={{ margin: 0, fontStyle: 'italic' }}>
        (You can also press space)
      </p>
    </div>
  )
}

export default Game
