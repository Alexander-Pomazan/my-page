import React from 'react'
import { Shift } from 'ambient-cbg'

import { useMedia } from 'src/hooks'
import { phoneBreakPoint } from 'src/breakpoints'

export const Background = () => {
  const isPhone = useMedia({ maxWidth: phoneBreakPoint })

  if (isPhone) return null

  return <Shift />
}
