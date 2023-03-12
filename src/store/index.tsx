import { createContext } from 'react'
import { RootStore } from '@/store/RootStore'

export const rootStoreContext = createContext({
  rootStore: new RootStore(),
})
