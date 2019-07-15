import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { phoneBreakPoint } from 'src/breakpoints'
import { Icon } from 'src/components'
import { tabPropType } from 'src/common-prop-types'

const TabListItem = styled.li`
  flex-grow: 1;

  @media screen and (min-width: ${phoneBreakPoint}px) {
    flex-grow: 0;
  }
`

const IconsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transition: opacity var(--transition-medium);
    fill: var(--color-grey-400);

    :nth-child(2) {
      fill: var(--color-primary-light);
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`

const Tab = styled.button`
  background: none;
  border: none;
  display: block;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  background-color: var(--color-paper);
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0;
  height: 4rem;
  width: 100%;

  @media screen and (min-width: ${phoneBreakPoint}px) {
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
  }

  transition: transform var(--transition-medium);
  :before,
  :after {
    transition: opacity var(--transition-medium);
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    border-radius: 0;

    @media screen and (min-width: ${phoneBreakPoint}px) {
      border-radius: 50%;
    }
  }

  :before {
    box-shadow: var(--elevation-1);
    opacity: 1;

    @media screen and (min-width: ${phoneBreakPoint}px) {
      box-shadow: var(--elevation-2);
    }
  }

  :after {
    box-shadow: var(--elevation-3);
    opacity: 0;

    @media screen and (min-width: ${phoneBreakPoint}px) {
      box-shadow: var(--elevation-3);
    }
  }

  :focus,
  :hover {
    outline: none;
    :before {
      opacity: 0;
    }

    :after {
      opacity: 1;
    }

    @media screen and (min-width: ${phoneBreakPoint}px) {
      transform: scale(1.05);
    }
  }

  &[aria-selected='true'] {
    z-index: 10;
    ${IconsWrapper} {
      svg {
        opacity: 0;

        :nth-child(2) {
          opacity: 1;
        }
      }
    }
  }
`

export const TabItem = ({
  tabName,
  iconVariant,
  description,
  onSelectTab,
  isActive
}) => {
  const onSelect = useCallback(() => onSelectTab(tabName), [
    onSelectTab,
    tabName
  ])

  return (
    <TabListItem>
      <Tab
        type="button"
        onClick={onSelect}
        onFocus={onSelect}
        role="tab"
        aria-label={description}
        aria-selected={isActive}
      >
        <IconsWrapper>
          <Icon variant={iconVariant} role="presentation" />
          <Icon variant={iconVariant} aria-hidden />
        </IconsWrapper>
      </Tab>
    </TabListItem>
  )
}

TabItem.propTypes = {
  ...tabPropType,
  onSelectTab: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}
