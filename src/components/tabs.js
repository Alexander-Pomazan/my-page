import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { tabPropType } from 'src/common-prop-types'
import { TabItem } from 'src/components'

const Root = styled.nav``

const TabsList = styled.ul`
  display: flex;

  > *:not(:last-child) {
    margin-right: 1.5rem;
  }
`

export const Tabs = ({ onSelectTab, activeTabName, tabs }) => {
  return (
    <Root aria-label="Information tabs">
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
