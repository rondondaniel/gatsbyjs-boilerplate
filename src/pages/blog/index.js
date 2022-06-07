import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My blog Posts">
      {
        data.allPrismicBlogPost.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.uid}`}>
                {node.data.title.text}
              </Link>
            </h2>
            <p>Posted: {node.data.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allPrismicBlogPost(sort: {fields: data___date, order: DESC}) {
      nodes {
        data {
          title {
            text
          }
          date
        }
        id
        uid
      }
    }
  }
`

export default BlogPage