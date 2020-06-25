import React from 'react'
import './navbar.styles.css'
import PhoneIcon from '../../picture/phoneIcon.png'
import MailIcon from '../../picture/mailIcon.png'
import {Navbar,Nav, NavItem , NavLink, NavbarText} from 'reactstrap'
const NavbarMain = () => {
    return (
        <div>
            <Navbar className='navbarMain' color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink > <img className= 'navPic' src={PhoneIcon}/>+08801732710968</NavLink>
            </NavItem>
            <NavItem>
              <NavLink> <img src={MailIcon} className='navPic'/>ashrafraneem@gmail.com</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
        </div>
    )
}
export default NavbarMain