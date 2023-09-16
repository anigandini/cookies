import { create } from 'zustand'
import characters from '../utils/charactersList'

type State = {
    choosedCharacter: object
  }
  
type Action = {
    chooseCharacter: (character: State['choosedCharacter']) => void
}

const useStore = create<State & Action>((set) => ({
  choosedCharacter: characters[0],
  chooseCharacter: (character: any) => set(() => ({ choosedCharacter: character })),
  //removeAllBears: () => set({ bears: 0 }),
}))

export default useStore