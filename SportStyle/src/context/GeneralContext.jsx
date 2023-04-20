import React, { createContext } from 'react'
import axios from 'axios'

const URL = 'http://localhost:8000/'
const generalContext = createContext()

export default function GeneralContextProvider({ children }) {

    async function readRegister(route) {
        const res = await axios.get(URL + route + '/')
        return res.data
    }

    async function deleteRegister(id, route) {
        await axios.delete(URL + route + '/' + id)
    }

  return (
    <generalContext.Provider value={{ readRegister, deleteRegister }}>
        { children }
    </generalContext.Provider>
  )
}

export { generalContext }
