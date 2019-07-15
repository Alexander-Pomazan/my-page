import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { TabHeader, Paragraph, FadeIn } from 'src/components'

const appearAnimationDelayBase = 80

const Root = styled.section`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

export const AboutMe = ({ isActive }) => (
  <Root>
    <FadeIn isIn={isActive}>
      <TabHeader>About me</TabHeader>
    </FadeIn>

    <FadeIn
      isIn={isActive}
      animationDelay={`${appearAnimationDelayBase * 1}ms`}
    >
      <Paragraph>
        My main focus as a developer is to create web apps with beautiful
        interface and smooth 60fps performance. I am  persistent when it comes
        to solving difficult tasks and always ready to learn a new skill. 
      </Paragraph>
    </FadeIn>
    <FadeIn
      isIn={isActive}
      animationDelay={`${appearAnimationDelayBase * 1.5}ms`}
    >
      <Paragraph>
        When working with team, I always strive for creating an environment
        where initiative and desire to create a perfect product is fostered and
        hard effort is appreciated and rewarded. 
      </Paragraph>
    </FadeIn>
    <FadeIn
      isIn={isActive}
      animationDelay={`${appearAnimationDelayBase * 2}ms`}
    >
      <Paragraph>
        Apart from programming I have several other hobbies like science,
        guitar, stand-up comedy.
      </Paragraph>
    </FadeIn>
  </Root>
)

AboutMe.propTypes = {
  isActive: PropTypes.bool.isRequired
}
