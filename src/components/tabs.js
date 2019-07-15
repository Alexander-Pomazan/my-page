import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { tabletBreakPoint, phoneBreakPoint } from 'src/breakpoints'
import { tabPropType } from 'src/common-prop-types'
import { TabItem } from 'src/components'

const Root = styled.nav``

const TabsList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;

  @media screen and (min-width: ${phoneBreakPoint}px) {
    flex-direction: column;
    > *:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (min-width: ${tabletBreakPoint}px) {
    flex-direction: row;
    > *:not(:last-child) {
      margin-bottom: 0;
      margin-right: 1.5rem;
    }
  }
`

export const Tabs = ({ onSelectTab, activeTabName, tabs }) => {
  return (
    <Root aria-label="Information tabs" role="tablist">
      <TabsList>
        {tabs.map(({ tabName, iconVariant, description }) => (
          <TabItem
            key={tabName}
            isActive={tabName === activeTabName}
            tabName={tabName}
            iconVariant={iconVariant}
            description={description}
            onSelectTab={onSelectTab}
          />
        ))}
      </TabsList>
    </Root>
  )
}

Tabs.propTypes = {
  onSelectTab: PropTypes.func.isRequired,
  activeTabName: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(tabPropType).isRequired
}
