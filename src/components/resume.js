import React from 'react'
import { styled } from 'linaria/react'

import { MainContent } from 'src/components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Root = styled.div`
  width: 100%;
  max-width: 50rem;
  box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.2);
  display: flex;
`

const FillLeftSider = styled.div`
  flex-grow: 1;
`

export const Resume = () => {
  return (
    <Wrapper>
      <Root>
        <MainContent />

        <FillLeftSider />
      </Root>
    </Wrapper>
  )
}
