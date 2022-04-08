import * as React from 'react'
import { graphql } from 'gatsby';
import { Layout } from '../components'

interface BlogPageProps {
  data: {
    allFile: {
      nodes: { name: string }[]
    }
  }
}

const BlogPage = ({ data }: BlogPageProps) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

//  To pull data into a page component,
//  use a page query.
export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`

export default BlogPage