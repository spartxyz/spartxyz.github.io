/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ description, lang, meta, title }) {
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
      <meta property="og:url" content="https://spart.site/" />
      <meta property="og:type" content="article" />
      <meta name="description" content="A place where artists can collaborate on combinations of visual, audio, and written artwork." />
      <meta name="keywords" content="artists, spart, visual artist, music maker, writer, voice actor, collaboration, composer, producer"/>
      <meta name="twitter:creator" content="@Spart_xyz" />
      <meta name="instagram:creator" content="@spart_xyz" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
