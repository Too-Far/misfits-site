import React from "react"
import { Link } from "gatsby"
import Hero from '../components/Hero/Hero'
import Slider from '../components/Slider/Slider'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Slider/>
    <Link to="/playground/">Playground</Link> <br />
  </Layout>
)

export default IndexPage
