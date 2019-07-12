import React, { useCallback, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { Icon } from 'src/components'
import { tabPropType } from 'src/common-prop-types'

const TabListItem = styled.li``

const IconsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transition: opacity var(--transition-medium);
    fill: var(--color-black-40);

    :nth-child(2) {
      fill: var(--color-primary);
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
  cursor: pointer;

  background-color: var(--color-white);

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;

  transition: transform var(--transition-medium);
  :before,
  :after {
    transition: opacity var(--transition-medium);
    content: '';
    display: block;
    position: absolute;
    border-radius: 50%;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 0 1px blue;
  }

  :before {
    box-shadow: var(--elevation-1);
    opacity: 1;
  }

  :after {
    box-shadow: var(--elevation-3);
    opacity: 0;
  }

  :focus,
  :hover {
    outline: none;
    transform: scale(1.05);
    :before {
      opacity: 0;
    }

    :after {
      opacity: 1;
    }
  }

  &[aria-selected='true'] {
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
      <Tab type="button" onClick={onSelect} role="tab" aria-selected={isActive}>
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
