import { useContext } from 'react'
import { rootStoreContext } from '@/store'

export const useStore = () => useContext(rootStoreContext)
