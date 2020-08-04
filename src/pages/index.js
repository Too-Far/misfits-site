import React from "react"
import { Link } from "gatsby"
import Hero from '../components/Hero/Hero'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Link to="/playground/">Playground</Link> <br />
  </Layout>
)

export default IndexPage
