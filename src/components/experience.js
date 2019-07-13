import React from 'react'
import { styled } from 'linaria/react'

import { TabHeader } from 'src/components'
import { appearAnimation } from 'src/theme'

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
  margin-bottom: 1.5rem;
`

const ExperienceDescription = styled.p`
  margin-left: 1rem;
  margin-bottom: 0.6rem;
  font-size: 0.92rem;
  letter-spacing: 0.02rem;
  text-indent: 0.8rem;
`

const appearAnimationDelayBase = 20

export const Experience = () => {
  return (
    <section>
      <TabHeader>Companies I worked with</TabHeader>

      <ul>
        <li>
          <article>
            <CompanyName
              className={appearAnimation}
              style={{
                '--appear-animation-delay': `${appearAnimationDelayBase * 2}ms`
              }}
            >
              <JetRuby>JetRuby agency</JetRuby>
              <WorkDate>
                <time dateTime="2018-07">July 2018</time> -{' '}
                <time dateTime={new Date()}>Current time</time>
              </WorkDate>
            </CompanyName>

            <ExperienceDescription
              className={appearAnimation}
              style={{
                '--appear-animation-delay': `${appearAnimationDelayBase * 3}ms`
              }}
            >
              Right now JetRuby agency is the first and only company I worked
              with. Since my first day here I was working a team of brilliant
              engineers and helped them develop large and complex React
              SPA&apos;s.
            </ExperienceDescription>

            <ExperienceDescription
              className={appearAnimation}
              style={{
                '--appear-animation-delay': `${appearAnimationDelayBase *
                  3.5}ms`
              }}
            >
              After some time I got enough skill and developed several projects
              on my own. For the most part these projects were SaaS apps with
              complex logic and rich functionality (editors, interactive chart
              dashboards).
            </ExperienceDescription>
          </article>
        </li>
      </ul>
    </section>
  )
}
