import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'
import loadable from '@loadable/component'

import { useMedia } from 'src/hooks'
import { lightTheme } from 'src/themes'
import { phoneBreakPoint } from 'src/breakpoints'

const Background = loadable(async () => {
  const { Background } = await import('./background')

  // eslint-disable-next-line react/display-name
  return (props) => <Background {...props} />
})

const Root = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: var(--color-primary-dark);
  color: var(--color-text-primary);
`

export const Layout = ({ children }) => {
  const isBackgroundShown = useMedia({ minWidth: phoneBreakPoint })

  return (
    <Root className={lightTheme}>
      {isBackgroundShown && <Background />}

      {children}
    </Root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
