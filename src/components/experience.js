import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { TabHeader, Paragraph, FadeIn } from 'src/components'

const Root = styled.section`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

const JetRuby = styled.a`
  color: #e35f07;
`

const WorkDate = styled.span`
  margin-left: 1rem;
  font-weight: 500;
  color: var(--color-text-hint);
  font-size: 0.8rem;
  text-transform: uppercase;
`

const CompanyName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

const appearAnimationDelayBase = 45

export const Experience = ({ isActive }) => {
  return (
    <Root>
      <FadeIn isIn={isActive}>
        <TabHeader>Companies I worked with</TabHeader>
      </FadeIn>

      <ul>
        <li>
          <article>
            <FadeIn
              isIn={isActive}
              animationDelay={`${appearAnimationDelayBase * 2}ms`}
            >
              <CompanyName>
                <JetRuby>JetRuby Agency</JetRuby>
                <WorkDate>
                  <time dateTime="2018-07">July 2018</time> -{' '}
                  <time dateTime={new Date()}>Current time</time>
                </WorkDate>
              </CompanyName>
            </FadeIn>

            <FadeIn
              isIn={isActive}
              animationDelay={`${appearAnimationDelayBase * 3}ms`}
            >
              <Paragraph>
                Right now JetRuby agency is the first and only company I worked
                with. Since my first day here I was working with a team of
                brilliant engineers and helped them develop large and complex
                React SPA&apos;s.
              </Paragraph>
            </FadeIn>

            <FadeIn
              isIn={isActive}
              animationDelay={`${appearAnimationDelayBase * 3.5}ms`}
            >
              <Paragraph>
                After some time I got enough skill and developed several
                projects on my own. For the most part these projects were SaaS
                apps with complex logic and rich functionality (editors,
                interactive chart dashboards).
              </Paragraph>
            </FadeIn>
          </article>
        </li>
      </ul>
    </Root>
  )
}

Experience.propTypes = {
  isActive: PropTypes.bool.isRequired
}
