import React from 'react'
import {Link} from 'gatsby'
import './Navs.css'


const Navigation = () =>(
    <div>
      <ul className="ulist">
        <li className="list"><Link to="/carrer/">Carrer</Link></li>
        <li className="list"><Link to="/Education/">Education</Link></li>
        <li className="list"><Link to="//">Intro</Link></li>
        <li className="list"><Link to="//">Technologies</Link></li>
        <li className="list"><Link to="//">Projects</Link></li> 
      </ul>
     </div> 
   
  );

  export default Navigation;