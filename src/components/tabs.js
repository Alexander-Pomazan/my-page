import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

const Root = styled.nav``

const TabsList = styled.ul`
  display: flex;
`

const TabListItem = styled.li`
  flex-grow: 1;
`

const Tab = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  border: 1px solid blue;
`

export const Tabs = ({ onSelectTab, activeTab, tabs }) => {
  return (
    <Root>
      <TabsList>
        {tabs.map((tab) => (
          <TabListItem key={tab}>
            <Tab>1</Tab>
          </TabListItem>
        ))}
      </TabsList>
    </Root>
  )
}

Tabs.propTypes = {
  onSelectTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}
