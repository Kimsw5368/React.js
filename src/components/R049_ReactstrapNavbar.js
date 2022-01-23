import React, {useState} from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const R049_ReactstrapNavbar = () => {
  const [state, setState] = useState(false)

  const toggle = () => {
    setState(!state)
  }

  return (
    <>
      <Navbar color={'faded'} light>
        <NavbarBrand href={'/'} className={'mr-auto'}>
          Navbar
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className={'mr-2'} />
        <Collapse isOpen={state} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href={'#'}>react</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={'https://naver.com'}>200</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

export default R049_ReactstrapNavbar
