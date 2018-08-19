import React from 'react'
import { ShakeHorizontal } from 'reshake'

import Button from './Button'
import Letter from './Letter'
import TimeCounter from './TimeCounter'
import { arrAlphabet } from './utils/alphabet'

function Game({
  msg,
  ended,
  currentPosition,
  time,
  restart,
  wrong,
  letterHue,
}) {
  // kinda hacky, but I haven't found a better way to enable/disable shaking
  // using a prop. `null` value makes it shake, while "active" will only trigger
  // animation on :active state - which happens...never. So yeah, hacky.
  const shakeTrigger = wrong ? null : 'active'

  return (
    <div className="Game">
      <p>{msg}</p>
      {ended ? (
        <React.Fragment>
          <h3>
            it took you{' '}
            <TimeCounter
              value={time}
              render={time => <Letter color={letterHue} value={time} />}
            />{' '}
            seconds!
          </h3>
          <p>not bad... wanna try again?</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ShakeHorizontal trigger={shakeTrigger} q={1}>
            <Letter
              color={letterHue}
              value={arrAlphabet[currentPosition]}
            />
          </ShakeHorizontal>
          <h2>
            Time:{' '}
            <TimeCounter
              value={time}
              render={time => <span>{time}</span>}
            />
            s
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
