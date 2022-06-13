import * as React from "react"
import { graphql } from 'gatsby'
import { SliceZone } from "@prismicio/react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
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
          ...HomePageDataBodyFeatures
          ...HomePageDataBodyCallToAction          
        }
      }
    }
  }
  `

export default IndexPage
