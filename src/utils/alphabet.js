const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const arrAlphabet = alphabet.split('')

const getKeyCode = char => char.toUpperCase().charCodeAt(0)

const firstLetter = getKeyCode('A')
const lastLetter = getKeyCode('Z')
const space = getKeyCode(' ')

export { arrAlphabet, getKeyCode, firstLetter, lastLetter, space }
