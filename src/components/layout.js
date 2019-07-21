import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { Background } from 'src/components'

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: #2f294f;
  color: var(--color-text-primary);
`

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Root>
        <div>
          <Background />
        </div>
        {children}
      </Root>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
