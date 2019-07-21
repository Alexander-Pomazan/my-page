import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { Background } from 'src/components'

const Root = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #2f294f;
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
