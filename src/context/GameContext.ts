import { createContext, useContext } from 'react'

export enum ChoiceEnum {
  Paper = 'paper',
  Rock = 'rock',
  Scissors = 'scissors',
}

export interface GameContextType {
  choice?: ChoiceEnum | null
  setChoice?: (choice: ChoiceEnum | null) => void
  score?: number
  setScore?: (score: number) => void
}

export const GameContext = createContext<GameContextType>({
  choice: null,
  setChoice: () => {},
  score: 0,
  setScore: () => {}
})

export const useGameContext = (): GameContextType => useContext(GameContext)
