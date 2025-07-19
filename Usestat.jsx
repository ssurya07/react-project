import React, { useState } from 'react'

const Usestat = () => {
    // let count=0

    // const [varibalename,functionname]=useState(value)

    const [count,setCount]=useState(0)

    function increment(){
setCount(count+1)
console.log(count);

    }

    function decrement(){
        setCount(count-1)
        console.log(count);
    }
  return (
   <>
   <h1>{count}</h1>
   <button onClick={increment}>+</button><button onClick={decrement}>-</button>
   </>
  )
}

export default Usestat