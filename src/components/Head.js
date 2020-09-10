import React, { Component } from "react";
import "./Head.css";
import logo from "./images/phlask-logo/phlask-logo.png";
import logo2x from "./images/phlask-logo/phlask-logo@2x.png";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import TutorialModal from "./TutorialModal";

export class Head extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayFilter: false,
      showModal: false,
      step: 1
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleShow() {
    this.setState({
      showModal: true
    });
  }

  handleClose() {
    this.setState({
      showModal: false,
      step: 1
    });
  }

  handleNext() {
    this.setState({
      step: this.state.step + 1
    });
  }

  render() {
    return (
      <div className={isMobile ? "menu mobile-menu" : "menu"}>
        <header>
          <Navbar bg="light" expand="lg" className="headColumns">
            <Navbar.Brand href="https://phlask.me/">
              <img
                src={logo}
                alt="Phlask"
                className="logoImage"
                srcSet={logo + ", " + logo2x + " 2x"}
              />
            </Navbar.Brand>
            {/* <img src={icon} alt="filterImg" onClick={this.display} /> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="menu">
              <Nav className="mr-auto">
                <Nav.Link href="#eco">Phlask EcoSystem</Nav.Link>
                <Nav.Link href="#map">Phlask Map</Nav.Link>
                <Nav.Link href="#share">Share Water</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <NavDropdown title="Data" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#about" className="data">
                    About The Project
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Business" className="data">
                    Business Benefits
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Finance" className="data">
                    Financial Data
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Citation" className="data">
                    Citations and Acknowledgements
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Bottle" className="data">
                    Phlask Bottle
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Button variant="primary" onClick={this.handleShow}>
            Launch demo modal
          </Button>
          <TutorialModal
            show={this.state.showModal}
            handleClose={this.handleClose}
            handleNext={this.handleNext}
            step={this.state.step}
          />
        </header>
      </div>
    );
  }
}

export default Head;
