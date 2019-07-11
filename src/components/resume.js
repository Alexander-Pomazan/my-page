import React from 'react'
import { styled } from 'linaria/react'

import { MainContent, AdditionalInfo } from 'src/components'

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

  display: flex;
  align-items: center;
`

const MainContentWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  background-color: var(--color-white);
  box-shadow: var(--elevation-4);
  z-index: 10;
`

const AdditionalInfoWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  background-color: var(--color-white);
  box-shadow: var(--elevation-2);
  z-index: 5;
`

export const Resume = () => {
  return (
    <Wrapper>
      <Root>
        <MainContentWrapper>
          <MainContent />
        </MainContentWrapper>

        <AdditionalInfoWrapper>
          <AdditionalInfo />
        </AdditionalInfoWrapper>
      </Root>
    </Wrapper>
  )
}
