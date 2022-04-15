import React from 'react';
import './header.css';

function Header() {
  return (
    <nav class="Navbar navbar-expand-lg navbar-light pb-5" style={{ backgroundColor: '#f1f3ff' }}>
      <div class="container">
        <div class="Collapse navbar-collapse" id="navbarNav">
          <a href="/">
            <img src="../img/logo.svg" alt="logo" />
          </a>
          <ul class="navbar-nav ms-auto">
            <li class="NavItem mx-2">
              <a class="nav-link" href="/">
                Our Services
              </a>
            </li>
            <li class="NavItem mx-2">
              <a class="nav-link" href="/">
                Why Us
              </a>
            </li>
            <li class="NavItem mx-2">
              <a class="nav-link" href="/">
                Testimonial
              </a>
            </li>
            <li class="NavItem mx-2">
              <a class="nav-link" href="/">
                FAQ
              </a>
            </li>
            <li class="NavItem mx-2">
              <button type="submit" class="registerbtn">
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
