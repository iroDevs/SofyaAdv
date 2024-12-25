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
  NavbarText,
} from 'reactstrap';
import { FaWhatsapp, FaInstagram,FaLinkedinIn,FaEnvelope } from 'react-icons/fa'; // Importe o ícone



function NavBarSite() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md"> {/* Adicione expand="md" */}
        <NavbarBrand className='title-1 display-1' href="/">Sofya Batista </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">
                Experiência
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Entre em Contato
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Mandar Email! <FaEnvelope /></DropdownItem>
                <DropdownItem>Whatszap <FaWhatsapp /></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Linkedin <FaLinkedinIn /></DropdownItem>
                <DropdownItem>Instagran <FaInstagram /></DropdownItem>
                <DropdownItem>Copiar Telefone: 32 9 9999-9999</DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarSite;
