import React, { useState } from 'react'
import Signin from './Signin'
import Signup from './Signup'

const Usestat1 = () => {
    const[count,setCount]=useState(0)
    const [show,Setshow]=useState(true)
    const [details,SetDetails]=useState([
      {
        name:'Esprit Ruffle Shirt',
        price:'$16.64',
        image:'https://preview.colorlib.com/theme/cozastore/images/product-01.jpg'
      },{
        name:'Herschel supply',
        price:'$35.31',
        image:'https://preview.colorlib.com/theme/cozastore/images/product-02.jpg'
      },
      {
        name:'Herschel supply',
        price:'$35.31',
        image:'https://preview.colorlib.com/theme/cozastore/images/product-02.jpg'
      },{
        name:'Herschel supply',
        price:'$35.31',
        image:'https://preview.colorlib.com/theme/cozastore/images/product-02.jpg'
      },{
        name:'Herschel supply',
        price:'$35.31',
        image:'https://preview.colorlib.com/theme/cozastore/images/product-02.jpg'
      },
    ])

    function increment(){
        setCount(count+1)
        console.log(count)
    }

    function decrement(){
        setCount(count-1)
        console.log(count)
    }

    function sigin(){
Setshow(true)
    }

    function sigup(){
Setshow(false)
    }
  return (
    <>
     <h1>{count}</h1>
     <button onClick={increment}>+</button><button onClick={decrement}>-</button><br></br><br></br>
    
    
     {/* {condition?true:false}
      */}
        <button onClick={sigin}>Signin</button><button onClick={sigup}>Signup</button>
      {show==true? <Signin/>: <Signup/>}
      <div className="row">

      
      {
        details.map(det=>(
          <div className="col-md-3">
          <div class="card " style={{width: '18rem'}}>
  <img src={det.image} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{det.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
        ))
      }

</div>
    </>
  )
}

export default Usestat1