import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { Expertise, Experience, AboutMe } from 'src/components'

const Root = styled.div`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  overflow: hidden;
`

const VisuallyHidden = styled.div`
  opacity: ${(p) => (p.isHidden ? 0 : 1)};
  position: relative;
  left: ${(p) => (p.isHidden ? '100%' : 0)};
  width: 100%;
  flex-shrink: 0;
`

export const AdditionalInfo = ({ activeTabName }) => {
  return (
    <Root>
      <VisuallyHidden
        aria-hidden={activeTabName !== 'expertise'}
        isHidden={activeTabName !== 'expertise'}
      >
        <Expertise />
      </VisuallyHidden>

      <VisuallyHidden
        aria-hidden={activeTabName !== 'experience'}
        isHidden={activeTabName !== 'experience'}
      >
        <Experience />
      </VisuallyHidden>

      <VisuallyHidden
        aria-hidden={activeTabName !== 'about-me'}
        isHidden={activeTabName !== 'about-me'}
      >
        <AboutMe />
      </VisuallyHidden>
    </Root>
  )
}

AdditionalInfo.propTypes = {
  activeTabName: PropTypes.string.isRequired
}
