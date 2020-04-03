import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import { FaUser, FaLightbulb, FaComment, FaPowerOff } from 'react-icons/fa';


    const NavBar = (props) => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Naa</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/auth">  <FaUser/>Profil </NavLink>
              
            </NavItem>
            <NavItem>
            <NavLink href="/"><FaLightbulb/>Parcours Ciné</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/root/Help"><FaComment/>Chat</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/connexion"><FaPowerOff/>Deconnexion</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

    
  );
  

}
export default NavBar;