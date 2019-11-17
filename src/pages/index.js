import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import FeatureBlock from "../components/feature-block"
import IntroBlock from "../components/intro-block"
import CallToAction from "../components/call-to-action"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <IntroBlock
      introTitle="Freely collaborate with other artists"
      introDescription="Interact with other artists and viewers in more interesting ways than other platforms have to offer"
    />

    <CallToAction
      text="Try out the app!"
    />

    <div className="collab-slider">slider</div>

    <div className="features-block">
      <FeatureBlock
        featureTitle="Collaborate"
        featureDescription="Pair your artwork with other artists for a heightened experience.
        Complimentary visuals, music, and writing can be paired together
        in all sorts of combinations. Watch people create visuals, create
        music, or write stories for the artwork you create."
      />
      <FeatureBlock
        featureTitle="Interaction"
        featureDescription="Most existing platform allow viewers to like and comment, but
        that's about it. When you spend 2 - 10+ hours working on a piece
        of artwork those likes and comments feel good but they aren't the
        most interesting interactions. Spart aims to create a place where
        you can have more interesting interactions with other artists than likes and comments."
      />
      <FeatureBlock
        featureTitle="Interpretation"
        featureDescription="Any artist can collaborate with your artwork as many times as they
        want. That way, you can see, read, or hear how others interpret your artwork."
      />
      <FeatureBlock
        featureTitle="Money"
        featureDescription="Counter to popular belief, likes, comments, and even Spart collaborations
        don't pay rent and we understand that. Spart will soon have a subscription
        based payment model that will allow viewers to financially support artists on a consistent basis."
      />
    </div>

    <CallToAction
      text="Try out the app!"
    />

    <div className="advanced-spart-slider">Advanced slider</div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/pricing/">Pricing</Link>
    <Link to="/tutorials/">Tutorials</Link>
    <Link to="/about/">About</Link>
    <Link to="/terms-conditions/">Terms and Conditions</Link>
    <Link to="/privacy-policy/">Privacy Policy</Link>
  </Layout>
)

export default IndexPage
