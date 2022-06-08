import * as React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  const pageTitle = "Blog Posts"
  const description = "Find all the Blog posts of the site"
  const slug = "/blog"
  const keywords = "Blog, posts, news, tutorials"
  
  return (
    <Layout pageTitle={pageTitle}>
      <Seo
        title={pageTitle}
        description={description}
        slug={slug}
        keywords={keywords}
      />
       <h2>{description}</h2>
      {
        data.allPrismicBlogPost.nodes.map(node => (
          <article key={node.id}>           
            <h3>
              <Link to={`/blog/${node.uid}`}>
                {node.data.title.text}
              </Link>
            </h3>
            <p>Posted: {node.data.date}</p>
            <p>{node.data.chapo.text}</p>
            <p>By: {node.data.author}</p>
            <p>Categories: {node.data.tags}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const data = graphql`
  query {
    allPrismicBlogPost(sort: {fields: data___date, order: DESC}) {
      nodes {
        data {
          title {
            text
          }
          chapo {
            text
          }
          date
          author
          tags
        }
        id
        uid
      }
    }
  }
`

export default BlogPage