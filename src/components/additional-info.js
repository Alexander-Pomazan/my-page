import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { Expertise, Experience, AboutMe } from 'src/components'

const Root = styled.div`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  overflow: hidden;
`

const VisuallyHidden = styled.div`
  opacity: ${(p) => (p.isHidden ? 0 : 1)};
  width: 100%;
  flex-shrink: 0;
  overflow: hidden;

  transform: ${(p) => {
    if (p.isHidden) return `translateX(${-100 * (p.index + 1)}%)`

    return `translateX(${-100 * p.index}%)`
  }};
`

export const AdditionalInfo = ({ activeTabName }) => {
  return (
    <Root>
      <VisuallyHidden
        index={0}
        aria-hidden={activeTabName !== 'expertise'}
        isHidden={activeTabName !== 'expertise'}
      >
        <Expertise isActive={activeTabName === 'expertise'} />
      </VisuallyHidden>

      <VisuallyHidden
        index={1}
        aria-hidden={activeTabName !== 'experience'}
        isHidden={activeTabName !== 'experience'}
      >
        <Experience isActive={activeTabName === 'experience'} />
      </VisuallyHidden>

      <VisuallyHidden
        index={2}
        aria-hidden={activeTabName !== 'about-me'}
        isHidden={activeTabName !== 'about-me'}
      >
        <AboutMe isActive={activeTabName === 'about-me'} />
      </VisuallyHidden>
    </Root>
  )
}

AdditionalInfo.propTypes = {
  activeTabName: PropTypes.string.isRequired
}
