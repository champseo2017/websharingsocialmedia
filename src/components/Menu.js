import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Button } from 'reactstrap';
import Language from './Language'

export default class Menu extends Component {

  render() {
    return (
      
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
      <div class="container">
        <a class="navbar-brand" href="#">จุ๊กกรู</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link pr-5" href="#">Contact</a>
            </li>
            <li class="nav-item dropdown" style={{backgroundColor: '#72c02c', borderRadius:'10px'}}>
        <a  style={{color: '#fff'}} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          เลือกภาษา
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        
          <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-th"></span> ไทย</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-gb"></span> อังกฤษ</a>
        
        </div>
      </li>
          </ul>
        </div>
      </div>
    </nav>
    
    );
  }
}
