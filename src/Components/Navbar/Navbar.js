import React, {Component} from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, a, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import {BrowserRouter as Router, Link} from 'react-router-dom'

class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <Router>
                <MDBNavbar color="morpheus-den-gradient" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">Navbar</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse}/>
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <a href='http://adiflashinfotech.com/#/'
                                   className={'nav-link waves-effect waves-light'}>Home</a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href='http://adiflashinfotech.com/#/details'
                                   className={'nav-link waves-effect waves-light'}>Details</a>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        );
    }
}

export default NavbarPage;
