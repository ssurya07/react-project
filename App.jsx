
import React from 'react'
import Home from './Home'
import Boods from './Foods'
import Usestat from './Usestat'
import Usestat1 from './Usestat1'
import Example from './Example'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Carrer from './Carrer'
import About from './About'
import Example1 from './Example1'
// import Profile from './img'
import Example2 from './Example2'
import Comp1 from './Comp1'
import FormHandling from './FormHandling'
import UseRefff from './UseRefff'
import Cake from './Cake'
import Harish from "./Harish";
import Harish1 from "./Harish1";
import Hotel from "./Hotel";


const App = () => {
  let username='surya'
  let age=20
  let dob='17.04.2004'
  return (
    <>
    {/* <img.jsx/> */}
    {/* <Boods/> */}
    {/* <Usestat/> */}
    {/* <Usestat1/> */}
    {/* <Example1/> */}
    {/* <h1>App</h1>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <h1>{username}</h1>
    <h1>{age}</h1>
    <Home name={username} age={age} dob={dob}/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Cake/>}>
      </Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/comp1' element={<Comp1/>}></Route>
      <Route path='/form' element={<FormHandling/>}></Route>
      <Route path='/ss' element={<UseRefff/>}></Route>
      <Route path='/example1' element={<Example1/>}></Route>
      <Route path='/harish' element={<Harish/>}></Route>
      <Route path='/harish' element={<Harish1/>}></Route>
      <Route path='/hotel' element={<Hotel/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
