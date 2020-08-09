import React from "react"
import { Link } from "gatsby"
import Hero from '../components/Hero/Hero'
import AboutBlurb from '../components/AboutBlurb/AboutBlurb'
import {MakeStyles} from '@material-ui/core'
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUs = () => (
  <Layout>
    <SEO title="About" />
    <Hero/>
    <AboutBlurb/>
  </Layout>
)

export default AboutUs