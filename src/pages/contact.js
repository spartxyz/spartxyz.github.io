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

  <div style={{ margin: '60px auto 20px auto' }}>
      <div style={{ textAlign: 'center', fontSize: '20px' }}>Sign Up For E-mail Updates</div>
      <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css"/>
      <div id="mc_embed_signup">
        <form action="https://site.us4.list-manage.com/subscribe/post?u=781944401c3bd73c2d0ecf0cc&amp;id=ccc9fd92c7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
          	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Leave us your e-mail :)" required/>
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_781944401c3bd73c2d0ecf0cc_ccc9fd92c7" tabindex="-1" value=""/>
            </div>
            <div class="clear" style={{ marginLeft: '12px' }}>
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button primary-button"/>
            </div>
          </div>
        </form>
      </div>
    </div>

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

    <p style={{ color: '#6A6A6A', textAlign: 'center', fontSize: '15px', marginTop: '40px' }}>
      Spart is being developed by&nbsp;
      <a style={{ color: '#6A6A6A', fontSize: '15px' }} href="https://twitter.com/ProgrammingJoe" target="_blank" rel="noopener noreferrer">ProgrammingJoe</a>
      &nbsp;and designed by&nbsp;
      <a style={{ color: '#6A6A6A', fontSize: '15px' }} href="https://twitter.com/spenceramarsh" target="_blank" rel="noopener noreferrer">Spencer</a>
    </p>

  </Layout>
)

export default Contact
