import React, { createContext } from 'react'
import axios from 'axios'

const URL = 'http://localhost:8000/'
const generalContext = createContext()

export default function GeneralContextProvider({ children }) {

  return (
    <generalContext.Provider>
        { children }
    </generalContext.Provider>
  )
}

export { generalContext }
