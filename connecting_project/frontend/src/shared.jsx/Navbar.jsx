import React from 'react'
import { Link } from 'react-router-dom'
import Register from '../Components/Register'

export default function Navbar() {
  return (
    <div>
  

      {/* // Header Section Begin */}
      <header class="header-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3">
              <div class="logo">
                <a href="./index.html">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <nav class="nav-menu">
                <ul>
                  <li class="active"><a href="./index.html">Home</a></li>
                  <li><a href="./about-us.html">About Us</a></li>
                  <li><a href="./class-details.html">Classes</a></li>
                  <li><a href="./services.html">Services</a></li>
                  <li><a href="./team.html">Our Team</a></li>
                  <Link to="/register">Register</Link>
                  <li><a href="./contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-3">
              <div class="top-option">
                <div class="to-search search-switch">
                  <i class="fa fa-search"></i>
                </div>
                <div class="to-social">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-youtube-play"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="canvas-open">
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {/* // Header End */}
    </div>
  )
}
