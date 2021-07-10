import React from 'react'
import Layout from '../components/Layout'
import { title } from '../css/style.module.css'

const index = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1 className={title}>
        Super Sweet Title Page
      </h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default index
