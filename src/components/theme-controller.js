import React, {
  useMemo,
  useState,
  useLayoutEffect,
  useContext,
  useCallback
} from 'react'
import PropTypes from 'prop-types'
import { css } from 'linaria'

import { Themes } from 'src/themes'

const THEME_TRANSITIONS_TIME = 500

const themeTransition = css`
  * {
    transition: all ${THEME_TRANSITIONS_TIME}ms ease-in;
  }
`

const ThemeContext = React.createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeController = ({ children }) => {
  const [theme, setTheme] = useState(Themes.DARK)
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
