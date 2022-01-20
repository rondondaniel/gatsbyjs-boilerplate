import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import { PrismicRichText } from '@prismicio/react'

const BlogPost = ({ data }) => {
  const image = getImage(data.prismicBlogPost.data.hero_image)
  return (
    <Layout pageTitle={data.prismicBlogPost.data.title.text}>
      <p>{data.prismicBlogPost.data.date}</p>
      <GatsbyImage 
        image={image}
        alt={data.prismicBlogPost.data.hero_image.alt}
      />
      <PrismicRichText field={data.prismicBlogPost.data.body.richText} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    prismicBlogPost (id: {eq: $id}) {
      data {
        title {
          text
        }
        date
        hero_image {
          alt
          gatsbyImageData
        }
        body {
          richText
        }
      }
    }
    allPrismicBlogPost {
      nodes {
        id
      }
    }
  }
`

export default BlogPost