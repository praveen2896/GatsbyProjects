import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
   <h1>Hi people</h1>
    <p>Hi I am PraveenKumar , trying to explore Gatsby and React.</p>
    <p>My Goals is to Learn #RAN js</p>
      <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Node</li>
      </ul>
    <p>Excited to attend My First Hackathon</p>
    <Link to="/carrer/">Go to My Carrer</Link>
    <p></p>
    <footer>Thanks to Quincy Larson for this oppurtuniy</footer>
  </Layout>
)

export default IndexPage
