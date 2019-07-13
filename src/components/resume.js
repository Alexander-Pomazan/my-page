import React, { useState } from 'react'
import { styled } from 'linaria/react'

import { MainContent, AdditionalInfo, Tabs } from 'src/components'

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
  background-color: var(--color-paper);
  box-shadow: var(--elevation-10);
  z-index: 10;
`

const AdditionalInfoWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  background-color: var(--color-paper);
  box-shadow: var(--elevation-4);
  z-index: 5;
  position: relative;
`

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

const TabsWrapper = styled.div`
  position: absolute;
  bottom: calc(100% + 1.5rem);
  left: 1rem;
`

export const Resume = () => {
  const [activeTabName, setActiveTab] = useState(tabs[1].tabName)

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
