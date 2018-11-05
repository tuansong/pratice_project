import React from "react";

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
  Container,
} from "reactstrap";

export const Header = props => {
  return (
    <section className="header-container">
      <div className="first-navbar">
        <div className="container">
          <div className="row">
          <div className="col-lg-6">
              <p className="email mb-0">
                Have any question
                <span className="ml-4">
                  <i className="far fa-envelope" />
                  mail@example.com
                </span>
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <ul className="social mb-0 float-right">
                <li>
                  <i className="fab fa-facebook-f" />
                </li>
                <li>
                  <i className="fab fa-twitter" />
                </li>
                <li>
                  <i className="fab fa-google-plus-g" />
                </li>
                <li>
                  <i className="fab fa-linkedin-in" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="second-navbar">
        <Container>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/" className="logo">
              Opsimathy
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={props.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    Services
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Typography</DropdownItem>
                    <DropdownItem>Gallery</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </section>
  );
};
