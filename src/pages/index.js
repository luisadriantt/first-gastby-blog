import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

const App = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Posts ({data.allMarkdownRemark.totalCount})</h1>
    </div>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <BlogLink to={node.fields.slug}>
          <BlogTitle>
            <span>
              {node.frontmatter.title} - {node.frontmatter.date}
            </span>
          </BlogTitle>
        </BlogLink>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export default App

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
