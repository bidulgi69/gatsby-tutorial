import * as React from 'react'
import { graphql, Link } from 'gatsby';
import { Layout } from '../../components'

interface BlogPageProps {
  data: {
    allMdx: {
      nodes: {
        id: string,
        frontmatter: {
          title: string,
          date: string
        },
        slug: string
      }[]
    }
  }
}

const BlogPage = ({ data }: BlogPageProps) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
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
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                slug
            }
        }
    }
`

export default BlogPage