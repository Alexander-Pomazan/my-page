import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { theme } from 'src/theme'
import 'reset-css'
import './global.css'

const Root = styled.div`
  width: 100vw;
  height: 100vh;

  color: var(--color-text-primary);
`

export const Layout = ({ children }) => {
  return <Root className={theme}>{children}</Root>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
