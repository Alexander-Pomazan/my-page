import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'
import loadable from '@loadable/component'

import { useTheme, ThemeSwitch } from 'src/components'
import { useMedia, usePreferredTheme } from 'src/hooks'
import { phoneBreakPoint } from 'src/breakpoints'
import { isDarkTheme, ThemesNames } from 'src/themes'

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

const DarkThemeBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: block;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 10000;
  opacity: ${(p) => (p.isEnabled ? 1 : 0)};
`

const ThemeSwitchWrapper = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 2rem;
  z-index: 5000;
`

export const Layout = ({ children }) => {
  const isBackgroundShown = useMedia({ minWidth: phoneBreakPoint })
  const preferredTheme = usePreferredTheme()
  const { theme, toggleTheme } = useTheme()

  console.log('123')
  const [, forceRerender] = useState()
  useEffect(() => {
    console.log(preferredTheme, ThemesNames.LIGHT)
    if (preferredTheme !== ThemesNames.LIGHT) {
      console.log('rerender!')
      forceRerender(1)
    }
    /*
     * running this effect once because react hydration doesn't
     * update the theme.
     */
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Root className={theme}>
      {isBackgroundShown && <Background />}

      {children}
      <DarkThemeBackdrop isEnabled={isDarkTheme(theme)} />

      <ThemeSwitchWrapper>
        <ThemeSwitch isDarkTheme={isDarkTheme(theme)} onChange={toggleTheme} />
      </ThemeSwitchWrapper>
    </Root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
