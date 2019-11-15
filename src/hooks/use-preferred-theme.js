import { useMemo } from 'react'

import { useMedia } from './use-media'

import { ThemesNames } from 'src/themes'

const themeFromLs =
  typeof window !== `undefined` ? window.localStorage.getItem('theme') : null

export const usePreferredTheme = () => {
  const prefersDarkTheme = useMedia({ prefersDarkTheme: 'dark' })

  const preferredScheme = useMemo(
    () => (prefersDarkTheme ? ThemesNames.DARK : ThemesNames.LIGHT),
    [prefersDarkTheme]
  )
  return themeFromLs || preferredScheme
}
