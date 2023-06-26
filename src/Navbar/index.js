import React from 'react';
import '../../assets/css/style.css';

const Navbar = () => {
  return (
   <nav id="navbar" classname="navbar">
  <ul>
    <li><a classname="nav-link scrollto active" href="#hero">Home</a></li>
    <li><a classname="nav-link scrollto" href="#about">About</a></li>
    <li><a classname="nav-link scrollto" href="#portfolio">Memories</a></li>
    <li><a classname="nav-link scrollto" href="#contact">Contact</a></li>
  </ul>
  <i classname="bi bi-list mobile-nav-toggle" />
</nav>
  );
};

export default Navbar;
