// {PrismicPage.url}.js file

import * as React from "react"
import { graphql } from "gatsby"
import { SliceZone,PrismicRichText } from "@prismicio/react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import { components } from "../slices"

const Page = ({ data }) => {
  if (!data) return null
  const doc = data.prismicPage.data

  return (
    <Layout>
      <Seo title={data.prismicPage.data.title.text} />
      <PrismicRichText field={data.prismicPage.data.title.richText} />        
      <PrismicRichText field={data.prismicPage.data.chapo.richText} />      
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

export default Page