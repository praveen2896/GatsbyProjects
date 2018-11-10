import React from 'react'
import {Link} from 'gatsby'
import './Navs.css'




const Navigation = (props) =>(
    
    <div className="container">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/js/bootstrap.min.js"/>
      <ul  className="ulist">
        {/* <li className="list"><Link to={props.link}>{props.name}</Link></li> */}
        <li className="list"><Link to="/carrer/">Carrer</Link></li>
        <li className="list"><Link to="/Education/">Education</Link></li>
        <li className="list"><Link to="//">Intro</Link></li>
        <li className="list"><Link to="//">Technologies</Link></li>
        <li className="list"><Link to="/Projects/">Projects</Link></li> 
      </ul>
      
     </div>
    
   
  );

  export default Navigation;