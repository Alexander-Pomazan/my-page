import React from 'react'
import { styled } from 'linaria/react'

const Root = styled.div`
  width: 100%;
  max-width: 800px;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Resume = () => {
  return (
    <Wrapper>
      <Root>123</Root>
    </Wrapper>
  )
}
