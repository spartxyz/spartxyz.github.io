/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ description, lang, meta, title, keywords }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      description={description}
      keywords={keywords}
      titleTemplate={`%s | Artist Collaboration Platform`}
      meta={[].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `A place where artists can collaborate on combinations of visual, audio, and written artwork.`,
  keywords: 'artists, spart, visual artist, music maker, writer, voice actor, collaboration, composer, producer, poems'
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.string
}

export default SEO
