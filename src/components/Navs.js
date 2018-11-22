import React from 'react'
import {Link} from 'gatsby'
import './Navs.css'
import {Navbar,Nav,NavItem} from "react-bootstrap"



const Navigation = (props) =>(
    
    <div className="container">
      <Navbar>
        <Nav>
            <NavItem>
              <Link to="/carrer/">Carrer</Link>
            </NavItem>
            <NavItem>
            <Link to="/Education/">Education</Link>
            </NavItem>
            <NavItem>
            <Link to="//">Intro</Link>
            </NavItem>
            <NavItem>
            <Link to="/Technologies/">Technologies</Link>
            </NavItem>
            <NavItem>
            <Link to="/Projects/">Projects</Link>
            </NavItem>
        </Nav>
      </Navbar>
      
     </div>
    
   
  );

  export default Navigation;