import React from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageIntro from "../components/page-intro"

import Discord from "../components/images/discord"
import Instagram from "../components/images/instagram"
import Twitter from "../components/images/twitter"

const url = 'https://site.us4.list-manage.com/subscribe/post?u=781944401c3bd73c2d0ecf0cc&amp;id=ccc9fd92c7'
const SimpleForm = () => <MailchimpSubscribe url={url}/>

const Contact = () => (
  <Layout>
    <SEO
      title="Contact"
      canonical="contact/"
      description="Contact the developer of Spart, sign up for email updates, or follow our social media."
      keywords="contact, e-mail, updates, social, medias, instagram, twitter, discord"
    />

    <PageIntro
      introTitle="Contact"
      introDescription="Follow any of our social media accounts listed below, sign up for e-mail updates, or send us an e-mail."
    />

    <div style={{ margin: '0px auto 20px auto' }} className="contact-form">
      <div style={{ textAlign: 'center', fontSize: '20px', marginBottom: '12px' }}>Sign Up For E-mail Updates</div>
      <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div>
              <SimpleForm onSubmitted={formData => subscribe(formData)} />
              {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
              {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
              {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
            </div>
          )}
        />
    </div>

    <div className="social-medias" style={{ display: 'block', textAlign: 'center', marginTop: '100px' }}>
      <a href="https://invite.gg/spart" target="_blank" rel="noopener noreferrer" className="social-media"><Discord/></a>
      <a href="https://www.instagram.com/spart_xyz/" target="_blank" rel="noopener noreferrer" className="social-media"><Instagram/></a>
      <a href="https://twitter.com/Spart_xyz" target="_blank" rel="noopener noreferrer" className="social-media"><Twitter/></a>
      <span style={{ lineHeight: '34px', verticalAlign: 'top', margin: '0 12px' }} className="dot-thing">&#9679;</span>
      <a href="mailto:contact@spart.xyz"
        className="contact-link"
        style={{ fontSize: '22px', verticalAlign: 'top', lineHeight: '30px', color: '#1b1b1b' }}>
        contact@spart.xyz
      </a>
    </div>

    <p style={{ color: '#6A6A6A', textAlign: 'center', fontSize: '15px', marginTop: '10px' }}>
      Spart is being developed by&nbsp;
      <a style={{ color: '#6A6A6A', fontSize: '15px' }} href="https://twitter.com/ProgrammingJoe" target="_blank" rel="noopener noreferrer">ProgrammingJoe</a>
      &nbsp;and designed by&nbsp;
      <a style={{ color: '#6A6A6A', fontSize: '15px' }} href="https://twitter.com/spenceramarsh" target="_blank" rel="noopener noreferrer">Spencer</a>
    </p>

  </Layout>
)

export default Contact
