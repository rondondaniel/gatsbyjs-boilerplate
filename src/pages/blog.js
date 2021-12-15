import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My blog Posts">
      <ul>
      {
        data.allFile.nodes.map(node=> (
          <li>
            {node.name}  
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const data = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage