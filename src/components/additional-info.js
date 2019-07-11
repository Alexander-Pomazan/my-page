import React from 'react'
import { styled } from 'linaria/react'

const Root = styled.section`
  display: flex;
  flex-direction: column;
`

export const AdditionalInfo = () => {
  return (
    <Root>
      <div>tabs</div>

      <div>123</div>
    </Root>
  )
}
