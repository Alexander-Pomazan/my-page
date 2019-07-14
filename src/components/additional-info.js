import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { Expertise, Experience, AboutMe } from 'src/components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

export const AdditionalInfo = ({ activeTabName }) => {
  return (
    <Root>
      {activeTabName === 'expertise' && <Expertise />}
      {activeTabName === 'experience' && <Experience />}
      {activeTabName === 'about-me' && <AboutMe />}
    </Root>
  )
}

AdditionalInfo.propTypes = {
  activeTabName: PropTypes.string.isRequired
}
