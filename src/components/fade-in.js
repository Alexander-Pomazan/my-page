import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'linaria'

export const fadeInAnimation = css`
  animation-name: appear;
  animation-fill-mode: forwards;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-delay: var(--animation-delay);

  opacity: 0;
  transform: translateX(-1rem);
  @keyframes appear {
    from {
      opacity: 0;
      transform: translateX(-1rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const FadeIn = ({ children, isIn, animationDelay }) => {
  if (!isIn) return children

  return React.cloneElement(children, {
    className: `${children.props.className || ''} ${fadeInAnimation}`,
    style: { ...children.props.style, '--animation-delay': animationDelay }
  })
}

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  isIn: PropTypes.bool,
  animationDelay: PropTypes.string
}

FadeIn.defaultProps = {
  isIn: false,
  animationDelay: '0ms'
}
