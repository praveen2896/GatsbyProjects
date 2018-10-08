import React from 'react'
import { Link } from 'gatsby'
import '../css/styles.css'
import './header.css'
import '../css/theme.css'



const Header = ({ siteTitle }) => (
    
  <div
    style={{
      background: 'rebeccapurple',
    }}
  >
    <div
      style={{
        // margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/praveen2896"><i class="fab fa-github"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lucifierpraveen"><i class="fab fa-twitter"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in"><i class="fab fa-linkedin"></i></a>

        
      </h1>
      <link href="https://fonts.googleapis.com/css?family=Reem+Kufi|Roboto:300" rel="stylesheet"/>
    	<link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet"/>  
      
      
      

    </div>
  </div>
)

export default Header
