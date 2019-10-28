import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'
import loadable from '@loadable/component'

import { useMedia } from 'src/hooks'
import { lightTheme, darkTheme } from 'src/themes'
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

const Themes = Object.freeze({
  LIGHT: lightTheme,
  DARK: darkTheme
})

const ThemeButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const Layout = ({ children }) => {
  const isBackgroundShown = useMedia({ minWidth: phoneBreakPoint })
  const [theme, setTheme] = useState(Themes.DARK)

  const handleToggleTheme = () =>
    setTheme((currentTheme) => {
      if (currentTheme === Themes.DARK) return Themes.LIGHT

      return Themes.DARK
    })

  return (
    <Root className={theme}>
      {isBackgroundShown && <Background />}
      <ThemeButton onClick={handleToggleTheme}>toggle theme</ThemeButton>

      {children}
    </Root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
