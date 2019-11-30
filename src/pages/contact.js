import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageIntro from "../components/page-intro"

import Discord from "../components/images/discord"
import Instagram from "../components/images/instagram"
import Twitter from "../components/images/twitter"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />

    <PageIntro
      introTitle="Contact"
      introDescription="There are a few ways you can keep in touch with us.
      You can follow any of our social medias listed below, sign up for e-mail updates, or send us an e-mail."
    />

    <div className="social-medias" style={{ display: 'block', textAlign: 'center' }}>
      <a href="https://invite.gg/spart" target="_blank" rel="noopener noreferrer" className="social-media"><Discord/></a>
      <a href="https://www.instagram.com/spart_xyz/" target="_blank" rel="noopener noreferrer" className="social-media"><Instagram/></a>
      <a href="https://twitter.com/Spart_xyz" target="_blank" rel="noopener noreferrer" className="social-media"><Twitter/></a>
      <span style={{ lineHeight: '34px', verticalAlign: 'top', margin: '0 12px' }}>&#9679;</span>
      <a href="mailto:contact@spart.xyz"
        style={{ fontSize: '22px', verticalAlign: 'top', lineHeight: '30px', color: '#1b1b1b' }}>
        contact@spart.xyz
      </a>
    </div>

  </Layout>
)

export default Contact
