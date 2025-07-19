import React, { useContext } from 'react'
import { userContext } from './Comp1'

const Comp3 = () => {
  const user=  useContext(userContext)
  return (
    <>
    <h1>Comp3 {user}</h1>
    </>
  )
}

export default Comp3