import React, { useState } from 'react'

const FormHandling = () => {

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    function handleUsername(event){
console.log(event.target.value);
setUsername(event.target.value);

    }

    function handlePassword(event){
        setPassword(event.target.value)
        console.log(password);
        
    }

    function handleSubmit(){
        console.log(username + password);
        
    }

   
    
  return (
    <>
    <label htmlFor="">username:</label>
    <input type="text" onChange={handleUsername}/>
    <label htmlFor="">password:</label>
    <input type="text" onChange={handlePassword}/>
    <button onClick={handleSubmit}>click me</button>
    <h1>{username}</h1>
    <h1>{password}</h1>
    </>
  )
}

export default FormHandling