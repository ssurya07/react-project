import React, { createContext, useState } from 'react'
import Comp2 from './Comp2'

export const userContext=createContext()
const Comp1 = () => {

  const [username,setUsername]=useState("surya")
  return (
    <>
    <userContext.Provider value={username}>
    <h1>Comp1</h1>
    <Comp2/>
    </userContext.Provider>
    </>
  )
}

export default Comp1