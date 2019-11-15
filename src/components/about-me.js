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
        My primary focus as a developer is creating web applications with
        beautiful interfaces and smooth performance. I believe persistency is
        key when it comes to solving difficult tasks, so I'm always ready to
        learn a new skill.
      </Paragraph>
    </FadeIn>

    <FadeIn
      isIn={isActive}
      animationDelay={`${appearAnimationDelayBase * 1.5}ms`}
    >
      <Paragraph>
        When working with a team, I always strive to create an environment where
        initiative and desire to develop a great product is fostered and hard
        effort is acknowledged and rewarded.
      </Paragraph>
    </FadeIn>

    <FadeIn
      isIn={isActive}
      animationDelay={`${appearAnimationDelayBase * 2}ms`}
    >
      <Paragraph>
        Apart from programming my other fields of interest include aerospace
        engineering, playing the guitar and stand-up comedy.
      </Paragraph>
    </FadeIn>
  </Root>
)

AboutMe.propTypes = {
  isActive: PropTypes.bool.isRequired
}
