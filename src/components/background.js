import React, { useEffect, useRef } from 'react'
import { styled } from 'linaria/react'

import { setupAnimation } from 'src/fireflies'
import { useMedia } from 'src/hooks'
import { phoneBreakPoint } from 'src/breakpoints'

const Canvas = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
`

export const Background = () => {
  const isPhone = useMedia({ maxWidth: phoneBreakPoint })
  const canvasRef = useRef(null)
  useEffect(() => {
    if (!isPhone && canvasRef.current) setupAnimation(canvasRef.current)
  }, [isPhone])

  if (isPhone) return null

  return <Canvas height="100%" width="100%" ref={canvasRef} />
}
