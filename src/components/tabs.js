import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { tabPropType } from 'src/common-prop-types'
import { TabItem } from 'src/components'

const Root = styled.nav``

const TabsList = styled.ul`
  display: flex;
  flex-direction: ${(p) => p.direction};

  > *:not(:last-child) {
    margin-right: ${(p) =>
      !p.isNoMargin && p.direction === 'row' ? '1.5rem' : 0};
    margin-bottom: ${(p) =>
      !p.isNoMargin && p.direction === 'column' ? '1.5rem' : 0};
  }

  @media screen and (max-width: var(--breakpoint-tablet)) {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`

export const Tabs = ({
  onSelectTab,
  activeTabName,
  tabs,
  isRectabgularTabs,
  direction
}) => {
  return (
    <Root aria-label="Information tabs" role="tablist">
      <TabsList isNoMargin={isRectabgularTabs} direction={direction}>
        {tabs.map(({ tabName, iconVariant, description }) => (
          <TabItem
            isRectangular={isRectabgularTabs}
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
  tabs: PropTypes.arrayOf(tabPropType).isRequired,
  direction: PropTypes.oneOf(['row', 'column']),
  isRectabgularTabs: PropTypes.bool
}

Tabs.defaultProps = {
  isRectabgularTabs: false
}
