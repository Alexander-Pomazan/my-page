import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { Background } from 'src/components'

const Root = styled.div`
  width: 100vw;
  height: 100vh;

  color: var(--color-text-primary);
`

export const Layout = ({ children }) => {
  return (
    <Root>
      <Background />
      {children}
    </Root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
