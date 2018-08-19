import React from 'react'
import { ShakeHorizontal } from 'reshake'

import Button from './Button'
import Letter from './Letter'
import ShareTime from './ShareTime'
import TimeFormatter from './TimeFormatter'
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
            It took you{' '}
            <TimeFormatter
              value={time}
              render={time => (
                <Letter color={letterHue} value={`🎉 ${time} 🎉`} />
              )}
            />{' '}
            seconds!
          </h3>
          <p>
            <TimeFormatter
              value={time}
              render={time => <ShareTime time={time} />}
            />
          </p>
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
            <TimeFormatter
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
