import React, {
  useMemo,
  useState,
  useEffect,
  useContext,
  useCallback
} from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'
import { css } from 'linaria'
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

export const Themes = Object.freeze({
  LIGHT: lightTheme,
  DARK: darkTheme
})

const ThemeButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`

const THEME_TRANSITIONS_TIME = 500

const themeTransition = css`
  * {
    transition: all ${THEME_TRANSITIONS_TIME}ms ease-in !important;
  }
`

const ThemeVariantContext = React.createContext(Themes.LIGHT)

export const useThemeVariant = () => useContext(ThemeVariantContext)

export const Layout = ({ children }) => {
  const isBackgroundShown = useMedia({ minWidth: phoneBreakPoint })
  const [theme, setTheme] = useState(Themes.DARK)
  const [isChangingTheme, setIsChangingTheme] = useState(false)

  const handleToggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme === Themes.DARK) return Themes.LIGHT

      return Themes.DARK
    })

    setIsChangingTheme(true)
  }, [])

  useEffect(() => {
    if (!isChangingTheme) return

    const timeoutId = window.setTimeout(
      () => setIsChangingTheme(false),
      THEME_TRANSITIONS_TIME
    )

    return () => window.clearTimeout(timeoutId)
  }, [isChangingTheme])

  const rootClassName = useMemo(
    () => [theme, isChangingTheme ? themeTransition : ''].join(' '),
    [isChangingTheme, theme]
  )

  return (
    <ThemeVariantContext.Provider value={theme}>
      <Root className={rootClassName}>
        {isBackgroundShown && <Background />}
        <ThemeButton onClick={handleToggleTheme}>toggle theme</ThemeButton>

        {children}
      </Root>
    </ThemeVariantContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
