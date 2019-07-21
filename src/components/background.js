import React, { useEffect, useRef } from 'react'
import { styled } from 'linaria/react'

import { setupAnimation } from 'src/fireflies'
import { useMedia } from 'src/hooks'
import { phoneBreakPoint } from 'src/breakpoints'

const Canvas = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
`

export const Background = () => {
  const isPhone = useMedia({ maxWidth: phoneBreakPoint })
  const canvasRef = useRef(null)
  useEffect(() => {
    if (!isPhone && canvasRef.current) setupAnimation(canvasRef.current)
  }, [isPhone, canvasRef.current])

  if (isPhone) return null

  return <Canvas ref={canvasRef} />
}
