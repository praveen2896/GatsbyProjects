import React from 'react'
import Layout from '../components/layout'
import './index.css'
import logo from '../images/nodejs.jpg'

const IndexPage = () => (
  <Layout>
   <div>
   <h1>Hi people</h1>
    <p>Hi I am PraveenKumar , trying to explore Gatsby and React.</p>
    <p>My Goals is to Learn #RAN js</p>
      <ul>
        <li className="list1">React</li>
        <li className="list1">Angular</li>
        <li className="list1">Node</li>
      </ul>
      <img className="mainimage" src={logo} alt="Pic Loading" width="900" height="500" />  
    <p>Excited to attend My First Hackathon</p>
    <p></p>
    <footer>Thanks to Quincy Larson for this oppurtuniy</footer>
    </div>
  </Layout>
)

export default IndexPage
