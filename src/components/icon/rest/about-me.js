import React from 'react'
import PropTypes from 'prop-types'

export const AboutMe = ({ height, width, ...otherProps }) => (
  <svg
    role="img"
    height={height}
    width={width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

AboutMe.defaultProps = {
  height: '1.5rem',
  width: '1.5rem'
}

AboutMe.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string
}
