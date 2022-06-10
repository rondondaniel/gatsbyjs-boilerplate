import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import { SliceZone } from "@prismicio/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import { components } from "../slices"

const IndexPage = ({ data }) => {
  const pageTitle = "Sandbox AI"
  const bannerTitle = data.prismicHomePage.data.title_of_banner.text
  const bannerDescription = data.prismicHomePage.data.banner_description.text
  const bannerButtonLink = data.prismicHomePage.data.banner_button_link.url
  const bannerButtonLabel = data.prismicHomePage.data.banner_button_label.text
  const imageBannerUrl = data.prismicHomePage.data.image_banner.url

  return (
    <Layout pageTitle={pageTitle}>
      <Seo title={pageTitle} />
      <Hero
        title={bannerTitle}
        description={bannerDescription}
        linkUrl={bannerButtonLink}
        linkLabel={bannerButtonLabel}
        backgroundUrl={imageBannerUrl}
      />
      <SliceZone slices={data.prismicHomePage.data.body} components={components}/>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/cliff.jpeg"
      />
    </Layout>
  )
}

export const data = graphql`
  query Homepage {
    prismicHomePage {
      data {
        title_of_banner {
          text
        }
        banner_description {
          text
        }
        banner_button_link {
          url
          type
          uid
        }
        banner_button_label {
          text
        }
        image_banner {
          url
        }
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...HomePageDataBodyVideoHighlights

        }
      }
    }
  }
  `

export default IndexPage
