import React, { useRef } from 'react'

const UseRefff = () => {
   const inputRef= useRef()

   function handleSubmit(){
     console.log(inputRef.current.value);
      
   }

   console.log("surya");
  return (
   <>
   <label htmlFor="">username:</label>
   <input type="text" ref={inputRef}/>
   <button onClick={handleSubmit}>click me</button>
   </>
  )
}

export default UseRefff