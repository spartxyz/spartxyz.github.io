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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <IntroBlock
      introTitle="Find your inner creativity"
      introDescription="Experiment with various mediums of art while still being able to
      showcase your strengths, all in one place, and with the support of other artists"
    />

  <div style={{ maxWidth: '800px', margin: 'auto', boxShadow: '0 48px 38px 0 rgba(0, 0, 0, 0.03)', marginBottom: '-6px' }}>
      <AppScreen/>
    </div>

    <CallToAction
      text="Does the screenshot above look interesting?"
    />

    <div className="features-block">
      <FeatureBlock
        featureTitle="Collaborate"
        featureDescription="Complimentary visuals, music, and writing can be paired together to amplify the viewing experience.
        Watch people create visuals, create music, or write stories for the artwork you create."
        imageRight={true}
        image={<Interaction/>}
      />
      <FeatureBlock
        featureTitle="Experiment"
        featureDescription="Spart aims to make it easy for you to try out new mediums of artwork
        while still allowing you to showcase your strengths. Sometimes expressing yourself in other ways is refreshing."
        imageRight={false}
        image={<Collab/>}
      />
      <FeatureBlock
        featureTitle="Interpret"
        featureDescription="Any artist can pair their work with yours as many times as they
        want. That way, you can see, read, or hear how a range other artists interpret the
        artwork you create."
        imageRight={true}
        image={<Interpretation/>}
      />
      <FeatureBlock
        featureTitle="Profit"
        featureDescription="Counter to popular belief likes, comments, and even Spart collaborations
        don't pay rent and we understand that. Spart will soon have a subscription
        based payment model that will allow viewers to financially support artists on a consistent basis."
        imageRight={false}
        image={<Money/>}
      />
      <p className="illustration-declaration"
        style={{ color: '#6A6A6A', textAlign: 'center', fontSize: '15px' }}>
        Illustrations are free and available here:&nbsp;
        <a style={{ color: '#6A6A6A', fontSize: '15px' }} href="https://absurd.design/" target="_blank" rel="noopener noreferrer">Absurd Design</a>
      </p>
    </div>

    <CallToAction
      text="Does that sound like a platform you want to try out?"
    />

  <div className="user-cases" style={{ textAlign: 'center' }}>
      <div className="use-case">Write a story based on a painting</div>
      <div className="use-case">Paint the character described in a story</div>
      <div className="use-case">Create music for a tale of adventure</div>
      <div className="use-case">Write a poem that expresses what a piece of music makes you feel</div>
      <div className="use-case">Create the theme for the warrior in a drawing</div>
      <div className="use-case">Engage with other artists outside your area of expertise</div>
      <div className="use-case">Create artwork outside your area in a relaxed environment</div>
      <div className="use-case">Financially support other artists on a consistent basis (soon)</div>
      <div className="use-case">Join a community of artists across mediums</div>
    </div>

  </Layout>
)

export default IndexPage
