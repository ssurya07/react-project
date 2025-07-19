import React, { useState } from 'react'

const Example = () => {
const [username,setUsername]=useState('sabesh')
  return (
    <>
    <h1>Example {username}</h1>
    </>
  )
}

export default Example