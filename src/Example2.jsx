import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Example2 = () => {
  return (
    <>
 

<div className="container-fluid">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><b>ESSENCE</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Home</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                shop
              </NavDropdown.Item>
             
              <NavDropdown.Item href="#action5">
                product details
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Check out
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7">
                <Link to='/Example2'>Blog</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8">
                Single Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action9">
                Regular page
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action10">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#" >
             <Link to='/about' className='text-decoration-none text-black text-'>Blog</Link> 
            </Nav.Link>
            <Nav.Link href="#" disabled>
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex me-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-5"
              aria-label="Search"
            />
           

           
            
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-heart me-5" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>


<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person me-5" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>


<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-bag me-1" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>



          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <img src="https://preview.colorlib.com/theme/essence/img/bg-img/bg-1.jpg" className='img-fluid'/>
                </div>
                </div>
               <div className='s container'>
                <h6>asoss</h6>
                <h2>New Collection</h2>
                <Button variant="primary" size="lg" active>
        VIEW COLLEACTION
      </Button>
                </div>
       
    </div>
   

    <div className="container">
      <div className="row">
        <div className="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://preview.colorlib.com/theme/essence/img/bg-img/bg-2.jpg" className='sss'/>
      <Card.Body>
        <Card.Title className='text-center ff fs-2'><b>CLOTHING</b></Card.Title>
      </Card.Body>
    </Card>
    </div>
    <div className="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="	https://preview.colorlib.com/theme/essence/img/bg-img/bg-3.jpg" className='sss'/>
      
        <Card.Title className='text-center ff fs-2'><b>SHOES</b></Card.Title>
      
    </Card>
    </div>
    <div className="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://preview.colorlib.com/theme/essence/img/bg-img/bg-4.jpg" className='sss'/>
      
        <Card.Title className='text-center ff fs-2'><b>ACCESSORIES</b></Card.Title>
      
    </Card>
    </div>
    </div>
    </div>
      
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
          <img src="	https://preview.colorlib.com/theme/essence/img/bg-img/bg-5.jpg" className='img-fluid'/>
          </div>
          <div className="col fff  fs-2 text-end ">
          <h3>-60%</h3>
          <h1>Global Sale</h1>
          <Button variant="primary" size="lg" active>
        BUY NOW
      </Button>
      </div>
        </div>
      </div>
      </div>

      <div className="container">
      <h1 className='text-center'><b>Popular Products</b></h1>
        <div className="row mt-5">
          <div className="col">

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://preview.colorlib.com/theme/essence/img/product-img/product-3.jpg" />
    </Card>
    <p className='mt-3 text-muted'><b>MANGO</b></p>
    <h5>PETITE Crepe Wrap Mini Dress</h5>
    <p>$80.00</p>
    </div>
    <div className="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://preview.colorlib.com/theme/essence/img/product-img/product-4.jpg" />
    </Card>
    <p className='mt-3 text-muted'><b>MANGO</b></p>
    <h5>PETITE Crepe Wrap Mini Dress</h5>
    <p>$80.00</p>
    </div>
    <div className="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://preview.colorlib.com/theme/essence/img/product-img/product-1.jpg" />
    </Card>
    <p className='mt-3 text-muted'><b>MANGO</b></p>
    <h5>PETITE Crepe Wrap Mini Dress</h5>
    <p>$80.00</p>
    </div>
    <div className="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="	https://preview.colorlib.com/theme/essence/img/product-img/product-2.jpg" />
    </Card>
    <p className='mt-3 text-muted'><b>MANGO</b></p>
    <h5>PETITE Crepe Wrap Mini Dress</h5>
    <p>$80.00</p>
    </div>
          
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <img src='https://preview.colorlib.com/theme/essence/img/core-img/brand1.png'/>
          </div>
          <div className="col">
            <img src='https://preview.colorlib.com/theme/essence/img/core-img/brand2.png'/>
          </div>
          <div className="col">
            <img src='https://preview.colorlib.com/theme/essence/img/core-img/brand3.png'/>
          </div>
          <div className="col">
            <img src='https://preview.colorlib.com/theme/essence/img/core-img/brand4.png'/>
          </div>
          <div className="col">
            <img src='https://preview.colorlib.com/theme/essence/img/core-img/brand5.png'/>
          </div>
          <div className="col">
            <img src='	https://preview.colorlib.com/theme/essence/img/core-img/brand6.png'/>
          </div>
        </div>
      </div>
<div className="container-fluid bg-dark">
      <div className="container ">
        <div className="row mt-5">
          <div className="col-1 text-center mt-5">
          <img src='https://preview.colorlib.com/theme/essence/img/core-img/logo2.png'/>
          </div>
          <div className="col-5 mt-5 text-white">
          <Link to='' className='text-white text-decoration-none'>Shop</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='' className='text-white text-decoration-none'>Blog</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='' className='text-white text-decoration-none'>Contact</Link>
          </div>
          <div className="col mt-5">
            <Link to='' className='text-white text-decoration-none'>Order Status</Link><br></br>
            <Link to='' className='text-white text-decoration-none mt-3'>Shipping and Delivery</Link><br></br>
            <Link to='' className='text-white text-decoration-none'>Privacy Policy</Link>
          </div>
          <div className="col mt-5">
            <Link to='' className='text-white text-decoration-none'>Payment Option</Link><br></br>
            <Link to='' className='text-white text-decoration-none'>Guides</Link><br></br>
            <Link to='' className='text-white text-decoration-none'>Tems of Use</Link>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-3">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <p><b className='text-white'>SUBSCRIBE</b></p> 
          <input type="text"  class="form-control border-bottom border-top-0 border-start-0 border-end-0 border-success rounded-0 border-3 bg-dark text-white"  placeholder="email@example.com" />
          </div>
          <div className="col-6 mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg> &nbsp;&nbsp;&nbsp;&nbsp;
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg> &nbsp;&nbsp;&nbsp;&nbsp;
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg>&nbsp;&nbsp;&nbsp;&nbsp;
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-pinterest" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"/>
</svg>&nbsp;&nbsp;&nbsp;&nbsp;
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>
          </div>
        </div>
        <div className="col mt-5">
          <p className='text-white text-center'>Copyright ©2025 All rights reserved | This template is made with <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg> by Colorlib</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default Example2