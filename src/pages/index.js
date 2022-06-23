import * as React from "react"
import { graphql } from "gatsby"
import { SliceZone } from "@prismicio/react"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import { components } from "../slices"

const theme = createTheme ({
  palette: {
    mode: 'dark',
  },
});

const HomeTemplate = ({ data }) => {

  const doc = data.prismicHomePage.data
  const pageTitle = "Sandbox AI"
  const bannerTitle = doc.title_of_banner.text
  const bannerDescription = doc.banner_description.text
  const bannerButtonLink = doc.banner_button_link.url
  const bannerButtonLabel = doc.banner_button_label.text
  const imageBannerUrl = doc.image_banner.url
  const imageBannerData = doc.image_banner.gatsbyImageData
  const imageBannerAlt = doc.image_banner.alt

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout pageTitle={pageTitle}>
        <Seo title={pageTitle} />
        <Hero
          title={bannerTitle}
          description={bannerDescription}
          linkUrl={bannerButtonLink}
          linkLabel={bannerButtonLabel}
          backgroundUrl={imageBannerUrl}
          backgroundData={imageBannerData}
          backggroundAlt={imageBannerAlt}
        />
        <SliceZone 
          slices={data.prismicHomePage.data.body}
          components={components}
        />
      </Layout>
    </ThemeProvider>
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
          alt
          gatsbyImageData
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

export default HomeTemplate
