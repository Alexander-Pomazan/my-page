import React, { useState } from 'react'
import { styled } from 'linaria/react'

import { MainContent, AdditionalInfo, Tabs } from 'src/components'
import { tabletBreakPoint, phoneBreakPoint } from 'src/breakpoints'

const tabNames = [
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

const tabs = Object.values(tabNames)

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;

  @media screen and (min-width: ${phoneBreakPoint}px) {
    flex-direction: column;
    justify-content: center;
  }
`

const Root = styled.div`
  width: 100%;
  max-height: 95%;
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
    flex-direction: row;
  }
`

const MainContentWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 43%;
  background-color: var(--color-paper);
  box-shadow: var(--elevation-10);
  z-index: 10;
  height: 100%;

  @media screen and (max-width: ${tabletBreakPoint}px) {
    height: auto;
    width: 100%;
  }
`

const AdditionalInfoWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 57%;
  width: 57%;
  background-color: var(--color-paper);
  box-shadow: var(--elevation-4);
  z-index: 5;
  position: relative;
  height: 80%;

  @media screen and (max-width: ${tabletBreakPoint}px) {
    height: auto;
    width: 75%;
    flex-basis: auto;
  }

  @media screen and (max-width: ${phoneBreakPoint}px) {
    width: 100%;
    flex-grow: 1;
  }
`

const TabsWrapper = styled.div`
  position: absolute;
  bottom: calc(100% + 1.5rem);
  left: 1rem;

  @media screen and (max-width: ${tabletBreakPoint}px) {
    bottom: auto;
    left: auto;
    right: calc(100% + 1.5rem);
    top: 1rem;
  }

  @media screen and (max-width: ${phoneBreakPoint}px) {
    position: static;
  }
`

export const CardsRoot = () => {
  const [activeTabName, setActiveTab] = useState(tabs[0].tabName)

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
