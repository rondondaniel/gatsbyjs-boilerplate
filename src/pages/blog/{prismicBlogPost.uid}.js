import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PrismicRichText } from '@prismicio/react'
import Layout from "../../components/layout";
import Seo from "../../components/seo";


const BlogPost = ({ data }) => {
  const image = getImage(data.prismicBlogPost.data.hero_image)
  const imageURL = data.prismicBlogPost.data.hero_image.url
  const imageAlt = data.prismicBlogPost.data.hero_image.alt
  const title = data.prismicBlogPost.data.title.text
  const description = data.prismicBlogPost.data.chapo.text
  const postDate = data.prismicBlogPost.data.date
  const keywords = data.prismicBlogPost.data.keywords
  const body = data.prismicBlogPost.data.body.richText
  const tags = data.prismicBlogPost.data.tags
  const postSlug = "/" + data.prismicBlogPost.uid
  
  return (
    <Layout pageTitle={title}>
      <Seo
        title={title}
        description={description}
        slug={postSlug}
        keywords={keywords}
        image={imageURL}
      />
      <h2>{description}</h2>
      <p>Published: {postDate}</p>
      <p>Keywords: {keywords}</p>
      <p>Categories: {tags}</p>  
      <GatsbyImage 
        image={image}
        alt={imageAlt}
      />
      <PrismicRichText field={body} />
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
          url
          gatsbyImageData
        }
        body {
          richText
        }
        chapo {
          text
        }
        keywords
        tags
      }
      uid
    }
    allPrismicBlogPost {
      nodes {
        id
      }
    }
  }
`
export default BlogPost