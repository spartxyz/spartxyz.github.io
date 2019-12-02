import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageIntro from "../components/page-intro"
import FAQ from "../components/small-summary"

const Tutorials = () => (
  <Layout>
    <SEO title="Help Center" />

    <PageIntro
      introTitle="Help Center"
      introDescription="Below you will find a few short tutorials on how to use some of the more common features of Spart. Below that there are
      some frequently asked questions."
    />

    <div style={{ textAlign: 'center' }}>
      <span className="video-title">Adding a story to Spart</span>
      <iframe title="Tutorial1" width="600" height="315" src="https://www.youtube.com/embed/dxXRI3rPW-0" frameborder="0" allowfullscreen/>

      <span className="video-title">Adding a story to an existing Visual</span>
      <iframe title="Tutorial2" width="600" height="315" src="https://www.youtube.com/embed/r3rviw8XRR8" frameborder="0" allowfullscreen/>

      <span className="video-title">Replacing a story with your own (Coolest feature!)</span>
      <iframe title="Tutorial3" width="600" height="315" src="https://www.youtube.com/embed/wIU1u3hkN0U" frameborder="0" allowfullscreen/>
    </div>

    <div style={{ margin: '140px auto' }}>
      <FAQ
        introTitle="Who is Spart for?"
        introDescription="Anyone really. Any beginner, amateur, or professional visual artist, producer, or writer."
      />

      <FAQ
        introTitle="What kind of artwork should I post on Spart?"
        introDescription="I created Spart for creators who enjoy building worlds, telling stories, and expressing emotions. A good question to ask
        yourself is 'Could someone collaborate with what I'm about to post?'."
      />

      <FAQ
        introTitle="Does Spart support NSFW content?"
        introDescription="No, not currently. I'd like to keep Spart PG-13 for now but in the future if that's what people want I
        will split the NSFW content from the SFW content completely as some viewers just don't want to see the NSFW content."
      />

      <FAQ
        introTitle="Are visual and audio files compressed?"
        introDescription="Yes. Currently, visual files are compressed down to 1920x1080 and they are converted into JPEGs.
        Audio files aren't actually compressed yet but they will be soon and they will likely be converted to mp3. Storing all these files
        costs money so by compressing them it allows me to save money which also lowers the price of the Pro plan. In the future, I may add a paid
        feature where you can post content without it being compressed."
      />

      <FAQ
        introTitle="Can I request features?"
        introDescription="Yes, absolutely. All feedback is appreciated! Click the Contact tab at the top of the screen to see how you can contact us."
      />
    </div>

  </Layout>
)

export default Tutorials
