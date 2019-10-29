import React, {
  useMemo,
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useCallback
} from 'react'
import PropTypes from 'prop-types'
import { css } from 'linaria'

import { useMedia } from 'src/hooks'
import { Themes } from 'src/themes'

const THEME_TRANSITIONS_TIME = 500

const themeTransition = css`
  * {
    transition: all ${THEME_TRANSITIONS_TIME}ms ease-in;
  }
`

const ThemeContext = React.createContext({
  theme: Themes.LIGHT,
  toggleTheme: () => {}
})

const themeFromLs =
  typeof window !== `undefined` ? window.localStorage.getItem('theme') : null

export const useTheme = () => useContext(ThemeContext)

export const ThemeController = ({ children }) => {
  const prefersDarkTheme = useMedia({ prefersDarkTheme: 'dark' })

  const preferredScheme = useMemo(
    () => (prefersDarkTheme ? Themes.DARK : Themes.LIGHT),
    [prefersDarkTheme]
  )

  const initialState = themeFromLs || preferredScheme

  const [theme, setTheme] = useState(initialState)
  const [isChangingTheme, setIsChangingTheme] = useState(false)

  const toggleTheme = useCallback(() => {
    setIsChangingTheme(true)

    setTheme((currentTheme) => {
      if (currentTheme === Themes.DARK) return Themes.LIGHT

      return Themes.DARK
    })
  }, [])

  useLayoutEffect(() => {
    if (!isChangingTheme) {
      document.body.classList.remove(themeTransition)
      return
    }

    document.body.classList.add(themeTransition)

    const timeoutId = window.setTimeout(
      () => setIsChangingTheme(false),
      THEME_TRANSITIONS_TIME
    )

    return () => {
      document.body.classList.remove(themeTransition)
      window.clearTimeout(timeoutId)
    }
  }, [isChangingTheme])

  useEffect(() => window.localStorage.setItem('theme', theme), [theme])

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme
    }),
    [theme, toggleTheme]
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeController.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
