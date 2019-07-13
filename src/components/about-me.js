import React from 'react'

import { TabHeader, Paragraph } from 'src/components'
import { appearAnimation } from 'src/theme'

const appearAnimationDelayBase = 80

export const AboutMe = () => (
  <section>
    <TabHeader>About me</TabHeader>

    <Paragraph
      className={appearAnimation}
      style={{
        '--appear-animation-delay': `${appearAnimationDelayBase * 1}ms`
      }}
    >
      My main focus as a developer is to create web apps with beautiful
      interface and smooth 60fps performance. I am  persistent when it comes to
      solving difficult tasks and always ready to learn a new skill. 
    </Paragraph>

    <Paragraph
      className={appearAnimation}
      style={{
        '--appear-animation-delay': `${appearAnimationDelayBase * 1.5}ms`
      }}
    >
      When working with team, I always strive for creating an environment where
      initiative and desire to create a perfect product is fostered and hard
      effort is appreciated and rewarded. 
    </Paragraph>

    <Paragraph
      className={appearAnimation}
      style={{
        '--appear-animation-delay': `${appearAnimationDelayBase * 2}ms`
      }}
    >
      Apart from programming I have several other hobbies like science, guitar,
      stand-up comedy.
    </Paragraph>
  </section>
)
