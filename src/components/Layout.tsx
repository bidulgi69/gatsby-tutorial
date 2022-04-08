import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from './layout.module.css'

const {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  heading,
  siteTitle
} = styles

interface LayoutProps {
  pageTitle: string,
  children: React.ReactNode
}

function Layout({ pageTitle, children }: LayoutProps) {

  //  To pull data into a building block,
  //  use the StaticQuery hook.
  const metadata = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)

  return (
      <div className={container}>
        <title>{pageTitle} | {metadata.site.siteMetadata.title}</title>
        <header className={siteTitle}>{metadata.site.siteMetadata.title}</header>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
  )
}

export default Layout