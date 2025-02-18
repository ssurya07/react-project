import React from 'react'
import About from './About'
import './Home.css'

const Home = (props) => {
  return (
    <>
    <h1 className='heading' style={{color:'red'}}>Home {props.name} {props.age} {props.dob}</h1>
    <About/>
    </>
  )
}

export default Home