import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeatureBlock from "../components/feature-block"
import IntroBlock from "../components/intro-block"
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
      introTitle="Freely collaborate with other artists"
      introDescription="Interact with other artists and viewers in more interesting ways than other platforms have to offer"
    />

  <div style={{ maxWidth: '800px', margin: 'auto', boxShadow: '0 48px 38px 0 rgba(0, 0, 0, 0.03)', marginBottom: '-6px' }}>
      <AppScreen/>
    </div>

    <CallToAction
      text="Does the screenshot above look interesting?"
    />

    <div className="features-block" style={{
        marginTop: '150px',
        marginBottom: '150px'
      }}>
      <FeatureBlock
        featureTitle="Collaborate"
        featureDescription="Pair your artwork with other artists for a heightened experience.
        Complimentary visuals, music, and writing can be paired together
        in all sorts of combinations. Watch people create visuals, create
        music, or write stories for the artwork you create."
        imageRight={true}
        image={<Interaction/>}
      />
      <FeatureBlock
        featureTitle="Interact"
        featureDescription="Most existing platform allow viewers to like and comment, but
        that's about it. Spart aims to create a place where
        you can have more interesting interactions with other artists than likes and comments."
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
      <p style={{ color: '#6A6A6A', textAlign: 'center', fontSize: '15px' }}>
        Illustrations are free and available here:&nbsp;
        <a style={{ color: '#6A6A6A', fontSize: '15px' }} href="https://absurd.design/" target="_blank" rel="noopener noreferrer">Absurd Design</a>
      </p>
    </div>

    <CallToAction
      text="Does that sound like a platform you want to try out?"
    />

  <div className="user-cases" style={{ margin: '150px auto 150px auto', textAlign: 'center' }}>
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
