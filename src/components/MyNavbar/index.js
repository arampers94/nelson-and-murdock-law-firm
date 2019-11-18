import React from 'react'
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from 'shards-react'

const links = ["Attorneys", "Services", "Statistics", "Testimonials", "Contact"]

const MyNavbar = () => {
  const [collapseOpen, setCollapseOpen] = React.useState(false)

  function toggleNavbar() {
    setCollapseOpen(!collapseOpen)
  }
  return (
    <div>
      <Navbar type="dark" className="wow slideInDown">
        <div className="mynavbar">
          <NavbarBrand href="#">Nelson & Murdock</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="navbar-toggler" />

          <Nav className="links">
            {links.map((link, index) => {
              return (
                <NavItem key={index}>
                  <NavLink active href="#">
                    {link}
                  </NavLink>
                </NavItem>
              )
            })}
          </Nav>

          <Collapse open={collapseOpen} navbar>
            <Nav navbar>
              {links.map((link, index) => {
                return (
                  <NavItem key={index}>
                    <NavLink active href="#">
                      {link}
                    </NavLink>
                  </NavItem>
                )
              })}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default MyNavbar
