import React, { useEffect, useRef } from 'react'
import { styled } from 'linaria/react'

import { setupAnimation } from 'src/fireflies'

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
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) setupAnimation(canvasRef.current)
  }, [])

  return <Canvas height="100%" width="100%" ref={canvasRef} />
}
