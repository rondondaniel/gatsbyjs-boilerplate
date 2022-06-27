// {PrismicPage.url}.js file

import * as React from "react"
import { graphql } from "gatsby"
import { SliceZone,PrismicRichText } from "@prismicio/react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import { components } from "../slices"

const PageTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicPage.data

  return (
    <Layout>
      <Seo title={doc.title.text} />
      <PrismicRichText field={doc.title.richText} />        
      <PrismicRichText field={doc.chapo.richText} />      
      <SliceZone slices={doc.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      data {
        title {
          text
          richText
        }
        chapo {
          richText
        }
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...PageDataBodyText
          ...PageDataBodyQuote
          ...PageDataBodyCallToAction
        }
      }
      uid
    }
  }
`

export default PageTemplate