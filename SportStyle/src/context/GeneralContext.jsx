import React, { createContext } from 'react'
import axios from 'axios'

const URL = 'http://localhost:8000/'
const generalContext = createContext()

export default function GeneralContextProvider({ children }) {

    async function readAllRegister(route) {
        const res = await axios.get(URL + route + '/')
        return res.data
    }

    async function readRegister(id, route) {
      const res = await axios.get(URL + route + '/' + id)
      return res.data
    }

    async function createRegister(route, register) {
      await axios.post(URL + route + '/', register)
    }

    async function updateRegister(id, route, register) {
      await axios.put(URL + route + '/' + id, register)
    }
  
    async function deleteRegister(id, route) {
      await axios.delete(URL + route + '/' + id)
    }

  return (
    <generalContext.Provider value={{ readAllRegister, readRegister, createRegister, updateRegister, deleteRegister }}>
        { children }
    </generalContext.Provider>
  )
}

export { generalContext }
