import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Navigation from './Navs'
import Header from './header'
import './layout.css'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} 
    render={data => (
      <>
     
   <Header siteTitle="PraveenKumar" />

    <Navigation/>
        <div
          style={{
            margin: '0 auto',
            padding: '0px 1.0875rem 1.45rem'
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
