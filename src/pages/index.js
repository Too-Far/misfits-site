import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p style={{marginTop: 60}}> Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.Pinnace holystone mizzenmast quarter crow 's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.

    Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors.Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase.Belay yo - ho - ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to. </p>
    <Link to="/playground/">Playground</Link> <br />
  </Layout>
)

export default IndexPage
