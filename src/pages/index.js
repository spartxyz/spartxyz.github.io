import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeatureBlock from "../components/feature-block"
import IntroBlock from "../components/main-intro-block"
import CallToAction from "../components/call-to-action"

import AppScreen from "../components/images/appscreen"
import Collab from "../components/images/collab"
import Interaction from "../components/images/interaction"
import Interpretation from "../components/images/interpretation"
import Money from "../components/images/money"
import Inspire from "../components/images/inspire"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Spart"
      canonical=""
      description="A place that fosters inspiration through creative expression and collaboration."
      keywords="creativity, collaboration, visual, artists, music, makers, writers, voice, actors"
    />

    <IntroBlock
      introTitle="Fuel your creativity, with collaboration"
      introDescription="Foster inspiration through creative expression and collaboration with other visual artists
        writers, music producers, and voice actors."
    />

  <div style={{ margin: 'auto', boxShadow: '0 48px 38px 0 rgba(0, 0, 0, 0.03)', marginBottom: '-10px' }}>
      <AppScreen/>
    </div>

    <CallToAction
      text="It's totally FREE!"
    />

    <div className="features-block">
      <FeatureBlock
        featureTitle="Collaborate"
        featureDescription="Pair your artwork with other visual artists, music producers, writers, and voice actors."
        imageRight={true}
        image={<Interaction/>}
      />
      <FeatureBlock
        featureTitle="Inspire"
        featureDescription="Inspire other artists with your work and watch as they collaborate with you."
        imageRight={false}
        image={<Inspire/>}
      />
      <FeatureBlock
        featureTitle="Experiment"
        featureDescription="Try something new by posting outside of your comfort zone. We are all beginners at something."
        imageRight={true}
        image={<Collab/>}
      />
      <FeatureBlock
        featureTitle="Community"
        featureDescription="Join a community that is inclusive, non discriminatory, and welcoming to creators of all skill levels."
        imageRight={false}
        image={<Interpretation/>}
      />
      <FeatureBlock
        featureTitle="Profit"
        featureDescription="Soon, you will be able to financially support artists (and be supported!) on a consistent basis"
        imageRight={true}
        image={<Money/>}
      />
      <p className="illustration-declaration"
        style={{ color: '#6A6A6A', textAlign: 'center', fontSize: '15px' }}>
        Illustrations are free and available here:&nbsp;
        <a style={{ color: '#6A6A6A', fontSize: '15px' }} title="absurd-design"
          href="https://absurd.design/" target="_blank" rel="noopener noreferrer">Absurd Design</a>
      </p>
    </div>

    <CallToAction
      text="Time to Collaborate."
    />

    <div className="user-cases" style={{ textAlign: 'center' }}>
      <p style={{ fontSize: '28px', fontWeight: '600', marginBottom: '32px' }}>
        A few examples of what you might do
      </p>
      <div className="use-case">Write a story based on a painting</div>
      <div className="use-case">Paint the character described in a story</div>
      <div className="use-case">Create music for a tale of adventure</div>
      <div className="use-case">Write a poem that expresses what a piece of music makes you feel</div>
      <div className="use-case">Create the theme for the warrior in a drawing</div>
      <div className="use-case">Engage with other artists outside your area of expertise</div>
      <div className="use-case">Create artwork outside your area in a relaxed environment</div>
      <div className="use-case">Join a community of artists across mediums</div>
      <div className="use-case">Financially support other artists on a consistent basis (soon)</div>
    </div>

  </Layout>
)

export default IndexPage
