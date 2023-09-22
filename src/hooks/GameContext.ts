import { createContext, useContext } from 'react'

export type ChoiceType = 'paper' | 'rock' | 'scissors'

export interface GameContextType {
  choice: ChoiceType | null
  setChoice: (choice: ChoiceType | null) => void
  score: number
  setScore: (score: number) => void
}

export const GameContext = createContext<GameContextType>({
  choice: null,
  setChoice: () => {},
  score: 0,
  setScore: () => {}
})

export const useGameContext = (): GameContextType => useContext(GameContext)
