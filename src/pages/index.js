import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
     <Layout pageTitle="Home Page">
       <Seo 
        title="Home Page"
        description="This is the home page"
        slug="/"
        keywords={"homekey1, homekey2, etc"}
      />
       <h1>I'm making this by following the Gatsby Tutorial.</h1>
       <StaticImage
         alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
         src="../images/cliff.jpeg"
       />
     </Layout>
  )
};

export default IndexPage
