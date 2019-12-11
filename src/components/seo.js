/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

function SEO({ description, title, image, pathname }) {
  return (<StaticQuery
    query={query}
    render={
      ({
        site: {
          siteMetadata: {
            defaultTitle,
            titleTemplate,
            defaultDescription,
            siteUrl,
            defaultImage,
            twitterUsername,
          }
        }
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${siteUrl}${image || defaultImage}`,
          url: `${siteUrl}${pathname || '/'}`,
        }
        console.log(seo.image);
        return (
          <>
            <Helmet title={seo.title} titleTemplate={`${seo.title}`}>
              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              {seo.url && <meta property="og:url" content={seo.url} />}
              {seo.title && <meta property="og:title" content={seo.title} />}
              {seo.description && (
                <meta property="og:description" content={seo.description} />
              )}
              {seo.image && <meta property="og:image" content={seo.image} />}
              <meta name="twitter:card" content="summary_large_image" />
              {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
              )}
              {seo.title && <meta name="twitter:title" content={seo.title} />}
              {seo.description && (
                <meta name="twitter:description" content={seo.description} />
              )}
              {seo.image && <meta name="twitter:image" content={seo.image} />}
            </Helmet>
          </>
        )
      }
    }
  />
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }`;




SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: null,
  image: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
