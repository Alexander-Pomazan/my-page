import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'
import 'reset-css'
import './global.css'

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Layout = ({ children }) => {
  return <Root>{children}</Root>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
