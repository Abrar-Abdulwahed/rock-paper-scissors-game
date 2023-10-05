import type { ChoiceType } from './hooks/GameContext'
export const DRAW = 'It\'s a draw'
export const LOSE = 'You lose'
export const WIN = 'You win'

export function houseChoice (): ChoiceType {
  const choices: ChoiceType[] = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

export function houseCheese1 (): ChoiceType {
  const choices: ChoiceType[] = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

export function houseCheese2 (): ChoiceType {
  const choices: ChoiceType[] = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

export const determineWinner = (choice: ChoiceType, house: ChoiceType) => {
  if (choice === house) {
    return DRAW
  } else if ((choice === 'rock' && house === 'scissors') ||
             (choice === 'scissors' && house === 'paper') ||
             (choice === 'paper' && house === 'rock')) {
    return WIN
  } else {
    return LOSE
  }
}
