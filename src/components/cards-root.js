import React, { useState } from 'react'
import { styled } from 'linaria/react'

import { MainContent, AdditionalInfo, Tabs } from 'src/components'
import { tabletBreakPoint, phoneBreakPoint } from 'src/breakpoints'

const tabs = [
  {
    tabName: 'expertise',
    iconVariant: 'expertise',
    description: 'My expertise'
  },
  {
    tabName: 'experience',
    iconVariant: 'experience',
    description: 'My experience'
  },
  {
    tabName: 'about-me',
    iconVariant: 'about-me',
    description: 'About me'
  }
]

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: ${phoneBreakPoint}px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    justify-content: center;
    align-items: center;
  }
`

const Root = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${phoneBreakPoint}px) {
    height: auto;
    width: 95%;

    align-items: center;
  }

  @media screen and (min-width: ${tabletBreakPoint}px) {
    max-width: 95%;
    width: 50rem;
    height: 26rem;
    max-height: 26rem;
    flex-direction: row;
  }
`

const MainContentWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 43%;
  background-color: var(--color-paper);
  box-shadow: var(--elevation-1);
  z-index: 10;

  height: auto;
  width: 100%;

  @media screen and (min-width: ${phoneBreakPoint}px) {
    box-shadow: var(--elevation-10);
  }

  @media screen and (min-width: ${tabletBreakPoint}px) {
    height: 100%;
    width: auto;
  }
`

const AdditionalInfoWrapper = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  background-color: var(--color-paper);
  box-shadow: var(--elevation-4);
  z-index: 5;
  position: relative;

  @media screen and (min-width: ${phoneBreakPoint}px) {
    width: 75%;
    flex-basis: auto;
  }

  @media screen and (min-width: ${tabletBreakPoint}px) {
    flex-basis: auto;
    height: 80%;
    width: 57%;
  }
`

const TabsWrapper = styled.div`
  @media screen and (min-width: ${phoneBreakPoint}px) {
    position: absolute;
    left: calc(100% + 1rem);
    top: 1rem;
  }

  @media screen and (min-width: ${tabletBreakPoint}px) {
    position: absolute;
    top: auto;
    bottom: calc(100% + 1rem);
    left: 1rem;
  }
`

const [firstTab] = tabs

const initialTabName = firstTab.tabName

export const CardsRoot = () => {
  const [activeTabName, setActiveTab] = useState(initialTabName)

  return (
    <Wrapper>
      <Root>
        <MainContentWrapper>
          <MainContent />
        </MainContentWrapper>

        <AdditionalInfoWrapper>
          <TabsWrapper>
            <Tabs
              tabs={tabs}
              activeTabName={activeTabName}
              onSelectTab={setActiveTab}
            />
          </TabsWrapper>

          <AdditionalInfo activeTabName={activeTabName} />
        </AdditionalInfoWrapper>
      </Root>
    </Wrapper>
  )
}
