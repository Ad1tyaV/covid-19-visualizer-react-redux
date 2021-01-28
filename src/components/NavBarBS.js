import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

function NavBarBS() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">        
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavBarBS
