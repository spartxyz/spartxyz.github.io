/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ description, lang, meta, title, canonical, keywords }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | Artist Collaboration Platform`}
      meta={[].concat(meta)}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="author" content="Joe Czepil"/>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords}/>
      <meta name="twitter:creator" content="@Spart_xyz" />

      <link rel="canonical" href={`https://spart.site/${canonical}`} />

      <meta property="og:title" content="Spart - Fuel your creativity, with collaboration" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://spart.site/" />
      <meta property="og:image" content="images/website.png" />
      <meta property="og:description" content="Spart is a platform where visual artists, music makers, writers, and voice actors can freely collaborate." />

      <meta name="twitter:title" content="Spart - Fuel your creativity, with collaboration"/>
      <meta name="twitter:description" content="Spart is a platform where visual artists, music makers, writers, and voice actors can freely collaborate."/>
      <meta name="twitter:image" content="images/website.png"/>
      <meta name="twitter:card" content="summary_large_image"/>

      <meta property="og:site_name" content="Spart"/>
      <meta name="twitter:image:alt" content="Spart Website Image"/>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  keywords: ''
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  keywords: PropTypes.string
}

export default SEO
