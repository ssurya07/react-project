import React from 'react'
import '../src/App.css'
const Example1 = () => {
  return (
    <>
    <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="boostrap3.html">Home</a>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item">
                <a class="nav-link" href="shop.html">Shop</a>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item">
                <a class="nav-link" href="features.html">Features</a>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item">
                <a class="nav-link" href="Blog.html">Blog</a>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
          </svg>
        </div>
      </nav>
     
</div>
<div class="container-fluid">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img src="https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp" class="d-block w-100 " alt="..."/>
                    <p class="a">Women Collection 2018</p>
                    <h1 class="s">NEW SEASON</h1>
                    <a href="shop.html">   <button class="d rounded-pill fs-6 p-3 border-0" >SHOP NOW</button></a>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp" class="d-block h-75 w-100" alt="..."/>
                    <p class="a">Men New-Season</p>
                    <h1 class="s">JACKETS & COATS</h1>
                    <a href="shop.html"><button class="d rounded-pill fs-6 p-3 border-0">SHOP NOW</button></a>
                  </div>
                  <div class="carousel-item">
                    <img src="https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp" class="d-block w-100" alt="..."/>
                    <p class="a">Men Collection 2018</p>
                    <h1 class="s">NEW ARRIVALS</h1>
                     <button class="d rounded-pill fs-6 p-3 border-0">SHOP NOW</button>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
        </div>
        <div class="container mb-5" style={{position:'relative',bottom:'100px'}}>
      <div class="row justify-content-around">
        <div class="col-md-4 p-3">
          <div class="f card bg-muted text-black">
            <img src=" https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg" class="card-img" alt="..."/>
            <div class="card-img-overlay">
              <h1 class="card-title text-black mt-3 ms-3"><b>Women</b></h1>
              <p class="card-text text-muted ms-4">spring 2018</p>
            </div>
            </div>
            </div>
            <div class="col-md-4 p-3">
              <div class="card bg-muted text-black">
                <img src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg" class="card-img" alt="..."/>
                <div class="card-img-overlay">
                  <h1 class="card-title text-black mt-3 ms-3"><b>Men</b></h1>
                  <p class="card-text text-muted ms-3">spring 2018</p>
                </div>
                </div>
                </div>
                <div class="col-md-4 p-3">
                  <div class="card bg-muted text-black">
                    <img src="https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg" class="card-img" alt="..."/>
                    <div class="card-img-overlay">
                      <h1 class="card-title text-black mt-3 ms-3"><b>Accessories</b></h1>
                      <p class="card-text text-black text-muted ms-3">New Trend</p>
                    </div>
                   </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h1><b>PRODUCT OVERVIEW</b></h1>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <p>All Products</p>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item">
                <p>Women</p>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item">
                <p>Men</p>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item">
                <p>Bag</p>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item">
                <p>Shoes</p>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item">
                <p>Watches</p>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
          </div>
        </div>
      </nav>
      <div class="row md-4">
        <div class="col mt-5">
          <div class="card " style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-01.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Esprit Ruffle Shirt &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$16.64</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-02.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Herschel supply &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$35.31</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-03.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Only Check Trouser &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$25.50</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-04.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Classic Trench Coat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart ms-5" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$75.00</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-05.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Front Pocket Jumper &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$34.75</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-06.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Vintage Inspired Classic &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$93.20</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-07.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Shirt in Stretch Cotton &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$60.64</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-08.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Pieces Metallic Printed &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$18.96</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-09.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Converse All Star Hi Plimsolls &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$52.64</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-10.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Femme T-Shirt In Stripe &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$42.18</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-11.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Herschel supply &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$63.16</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-12.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Herschel supply &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$63.15</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-13.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">T-Shirt with Sleeve &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$18.49</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-14.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Pretty Little Thing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$54.79</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-15.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Mini Silver Mesh Watch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$86.85</p></p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card shadow" style={{width: '18rem'}}>
            <img src="https://preview.colorlib.com/theme/cozastore/images/product-16.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text text-muted">Square Neck Back &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg><p>$29.14</p></p>
            </div>
          </div>
        </div>
        <div class="col text-center">
          <button class="rounded-pill fs-6 p-3 border-0" style={{marginTop: '100px'}}><b>LOAD MORE</b></button>
        </div>
      </div> 
    </div>
    <div class="container-fluid bg-dark text-white">
    <div class="container">
      <div class="row mt-5">
        <div class="col mt-5">
          <h4><b>CATEGORIES</b></h4>
          <p class="mt-5 text-white">Women</p>
          <p class="text-white mt-2">Men</p>
          <p class="text-white mt-2">Shoes</p>
          <p class="text-white mt-2">Watches</p>
        </div>
        <div class="col mt-5">
          <h4><b>HELP</b></h4>
          <p class="text-white mt-5">Track Order</p>
          <p class="text-white mt-2">Returns</p>
          <p class="text-white mt-2">Shipping</p>
          <p class="text-white mt-2">FAQs</p>
        </div>
        <div class="col mt-5">
          <h4><b>GET IN TOUCH</b></h4>
          <p class="text-white mt-5">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook " viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
          </svg>&nbsp;&nbsp;&nbsp;&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram " viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
          </svg>&nbsp;&nbsp;&nbsp;&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest " viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"/>
          </svg>
        </div>
        <div class="col mt-5">
          <h4><b>NEWSLETTER</b></h4>
          <div class="col-auto mt-5">
            <input type="text"  class="form-control border-bottom border-top-0 border-start-0 border-end-0 border-success rounded-0 border-3 bg-dark text-white" aria-describedby="passwordHelpInline" placeholder="email@example.com"/>
            <button class="rounded-pill fs-10 p-3 ps-5 pe-5 border-0 mt-4 bg" style={{backgroundColor: 'rgb(74, 219, 235)'}}><b>SUBSCRIBE</b></button>
          </div>
        </div>
        
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-5 text-center"><img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png.webp" alt="" class="img-fluid" />
          <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png" alt="" />
          <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png" alt="" />
          <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png" alt="" />
          <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png" alt="" /></div>
      <p class="mt-3 text-center">Copyright ©2024 All rights reserved | This template is made with <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
      </svg> by Colorlib</p>
      </div>
    </div>
  </div>
 
        </>
  )
}

export default Example1