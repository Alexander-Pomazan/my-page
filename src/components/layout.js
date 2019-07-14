import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

const Root = styled.div`
  width: 100vw;
  height: 100vh;

  color: var(--color-text-primary);
`

export const Layout = ({ children }) => {
  return <Root>{children}</Root>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
