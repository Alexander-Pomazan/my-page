import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { Icon } from 'src/components'
import { tabPropType } from 'src/common-prop-types'

const TabListItem = styled.li`
  flex-grow: ${(p) => (p.isRectangular ? 1 : 0)};
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
  cursor: pointer;

  background-color: var(--color-paper);

  border-radius: ${(p) => (p.isRectangular ? 0 : '50%')};
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${(p) => (p.isRectangular ? '4rem' : '2.5rem')};
  width: ${(p) => (p.isRectangular ? '100%' : '2.5rem')};

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  transition: transform var(--transition-medium);
  :before,
  :after {
    transition: opacity var(--transition-medium);
    content: '';
    display: block;
    position: absolute;
    border-radius: ${(p) => (p.isRectangular ? 0 : '50%')};
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 0 1px blue;
  }

  :before {
    box-shadow: ${(p) =>
      p.isRectangular ? 'var(--elevation-1)' : 'var(--elevation-2)'};
    opacity: 1;
  }

  :after {
    box-shadow: ${(p) =>
      p.isRectangular ? 'var(--elevation-3)' : 'var(--elevation-5)'};
    opacity: 0;
  }

  :focus,
  :hover {
    outline: none;
    transform: ${(p) => (p.isRectangular ? 'scale(1.01)' : 'scale(1.05)')};
    :before {
      opacity: 0;
    }

    :after {
      opacity: 1;
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
  isActive,
  isRectangular
}) => {
  const onSelect = useCallback(() => onSelectTab(tabName), [
    onSelectTab,
    tabName
  ])

  console.log(isRectangular)

  return (
    <TabListItem isRectangular={isRectangular}>
      <Tab
        isRectangular={isRectangular}
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
  isActive: PropTypes.bool.isRequired,
  isRectangular: PropTypes.bool
}

TabItem.defaultProps = {
  isRectangular: false
}
