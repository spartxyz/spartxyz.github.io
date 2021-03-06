import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageIntro from "../components/page-intro"
import FAQ from "../components/small-summary"

const PricingPage = () => (
  <Layout>
    <SEO
      title="Pricing"
      canonical="pricing/"
      description="Pricing tiers and information for the artwork collaboration platform, Spart."
      keywords="pricing, spart, artists, support, features, pro, free"
    />

    <PageIntro
      introTitle="Pricing"
      introDescription="Spart will always be free but premium plans are available so you can support artists, support the platform, and gain access to new cool features."
    />

    <div className="pricing-blocks" style={{ marginBottom: '60px' }}>
      <div className="pricing-block">
        <div className="pricing-title" style={{ backgroundColor: '#6A6A6A' }}>Free</div>
        <div className="pricing-price">$0</div>
        <div className="pricing-features">
          <div className="pricing-feature">Spart and all of it's existing features will always be free, forever &#9829;.</div>
        </div>
      </div>
      <div className="pricing-block">
        <div className="pricing-title" style={{ backgroundColor: '#F97353' }}>Pro</div>
        <div className="pricing-price">TBD</div>
        <div className="pricing-features">
          <div className="pricing-feature">We want to offer your more and allow you to financially support other creators.</div>
        </div>
      </div>
    </div>

    <div className="faq-block">
      <FAQ
        introTitle="How expensive will Pro be?"
        introDescription="I need to figure that out still. I've never wanted this application to grow into a big company
        so I'm aiming to charge just enough to keep the up running while also supporting me enough to continue improving and maintaining it."
      />

      <FAQ
        introTitle="What will Pro offer?"
        introDescription="One thing I definitely want Pro to offer is the ability for Pro users to financially support artists.
        Beyond that, I'm not sure yet."
      />

      <FAQ
        introTitle="Will Spart always be free?"
        introDescription="Yes, as long as there is a community willing to support it."
      />
    </div>

  </Layout>
)

export default PricingPage
