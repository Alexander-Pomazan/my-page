import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { Expertise } from 'src/components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 16rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

export const AdditionalInfo = ({ activeTabName }) => {
  return (
    <Root>
      <Expertise />
    </Root>
  )
}

AdditionalInfo.propTypes = {
  activeTabName: PropTypes.string.isRequired
}
