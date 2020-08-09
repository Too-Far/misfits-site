import React from "react"
import { Link } from "gatsby"
import Hero from '../components/Hero/Hero'
import Slider from '../components/Slider/Slider'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from '../components/ContactForm/ContactForm'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Slider/>
    <ContactForm/>
  </Layout>
)

export default IndexPage
