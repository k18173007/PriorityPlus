import React , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isNavOpen: false,

    }
    this.toggleNav = this.toggleNav.bind(this);

}


toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
}
render(){

    return (
        
         <Navbar dark expand="md">
                    <div className="container-fluid mt-2 p-0">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href="/" className="d-flex align-items-center" >
                          <h2>Priority Pulse</h2>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto d-flex align-items-center">
                                <NavItem>
                                <div className="nav-link px-3 py-1" style={{cursor:"pointer",color:"black", background:"#FDFDFD"}} to="/home">
                                        <strong>Home</strong>
                                </div>
                                </NavItem>
                                <NavItem>
                                    <div className="nav-link" style={{cursor:"pointer",color:"#FDFDFD"}} to="/aboutus">
                                    About Us
                                    </div>
                                </NavItem>
                                <NavItem>
                                    <div className="nav-link" style={{cursor:"pointer",color:"#FDFDFD"}} to="/menu">
                                    Menu
                                    </div>
                                </NavItem>
                                <NavItem>
                                    <div className="nav-link" style={{cursor:"pointer",color:"#FDFDFD"}} to="/contactus">
                                    Contact Us
                                    </div>
                                </NavItem>
                                <NavItem>
                                    <div className="media nav-link" >
                                        <img src="/assets/images/Profile.png" alt="profile"/>
                                    </div>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
        
    )
  }
}

export default Header
