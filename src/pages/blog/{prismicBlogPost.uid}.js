import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'

import Layout from '../../components/Layout'
import Seo from '../../components/Seo'

const BlogPostTemplate = ({ data }) => {

  const image = getImage(data.prismicBlogPost.data.hero_image)
  const imageURL = data.prismicBlogPost.data.hero_image.url
  const imageAlt = data.prismicBlogPost.data.hero_image.alt
  const title = data.prismicBlogPost.data.title.text
  const description = data.prismicBlogPost.data.chapo.text
  const postDate = new Date(data.prismicBlogPost.last_publication_date).toLocaleDateString('en-us',{year: 'numeric',month: 'long',day: 'numeric'})
  const keywords = data.prismicBlogPost.data.keywords
  const body = data.prismicBlogPost.data.body.richText
  const tags = data.prismicBlogPost.data.tags
  const postSlug = '/' + data.prismicBlogPost.uid
  const author = data.prismicBlogPost.data.author
  const id = data.allPrismicBlogPost.id
  
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
      <p>By: {author}</p>
      <p>Categories: {tags}</p>
      <p>{id}</p>
      <GatsbyImage 
        image={image}
        alt={imageAlt}
      />
      <PrismicRichText field={body} />
    </Layout>
  )
}

export const data = graphql`
  query ($id: String) {
    prismicBlogPost (id: {eq: $id}) {
      data {
        title {
          text
        }          
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
        author
        keywords
        tags
      }
      uid
      last_publication_date
    }
    allPrismicBlogPost {
      nodes {
        id
      }
    }
}
`

export default BlogPostTemplate