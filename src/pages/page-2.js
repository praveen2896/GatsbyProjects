import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>My Carrer</h1>
    <p>Currently Living in India</p>
    <p>Working as a Java (Spring Boot) developer in MNC</p>
    <p>Completed one year of Experience on September 18th 2018</p>
    
    <Link to="/">Go back to the Introduction</Link>
  </Layout>
)

export default SecondPage
