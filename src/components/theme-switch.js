import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { visuallyHidden } from 'src/themes'

const Root = styled.label`
  box-shadow: var(--elevation-21);
  border: 2px solid ${(p) => (p.isChecked ? `#6936C9` : `#83d8ff`)};
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 2.8rem;
  height: 1.8rem;
  background-color: ${(p) => (p.isChecked ? `#6936C9` : `#83d8ff`)};
  border-radius: 1rem;
  background-image: ${(p) =>
    p.isChecked ? `url(/night.svg)` : `url(/day.svg)`};
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: all var(--transition-medium);

  :after {
    transition: all var(--transition-medium);
    content: '';
    z-index: -1;
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    box-shadow: 0 0 8px 3px var(--color-secondary-main);
  }

  :focus-within {
    transform: scale(1.2);
    :after {
      opacity: 0.3;
    }
  }
`

const VisibleCheckbox = styled.div`
  display: inline-block;

  z-index: 1;

  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background-color: ${(p) => (p.isChecked ? `#eff9ff` : `#ff8742`)};
  background-image: ${(p) =>
    p.isChecked ? `url(/moon.svg)` : `url(/sun.svg)`};

  box-shadow: ${(p) =>
    p.isChecked
      ? `#0 0 5px 0 rgba(0, 0, 0, 0.25),
    inset 0 -3px 6px 0 rgba(0, 0, 0, 0.15)`
      : `0 0 5px 0 rgba(0, 0, 0, 0.25),
    inset 0 0 10px 0 hsla(0, 0%, 100%, 0.5)`};

  transform-origin: center;
  width: 1.2rem;
  height: 1.2rem;
  transform: ${(p) => {
    const left = p.isChecked ? 0.4 : 1.2

    return `translateX(${left}rem)`
  }};
`

export const ThemeSwitch = ({ isDarkTheme, onChange }) => {
  return (
    <Root isChecked={isDarkTheme}>
      <VisibleCheckbox isChecked={isDarkTheme} />
      <input
        type="checkbox"
        className={visuallyHidden}
        onChange={onChange}
        checked={isDarkTheme}
      />
    </Root>
  )
}

ThemeSwitch.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}
