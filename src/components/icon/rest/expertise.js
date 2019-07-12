import React from 'react'
import PropTypes from 'prop-types'

export const Expertise = ({ height, width, ...otherProps }) => (
  <svg
    role="img"
    height={height}
    width={width}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
  >
    <path d="M256 181c-33.091 0-60 26.909-60 60s26.909 60 60 60 60-26.909 60-60-26.909-60-60-60z" />
    <path d="M499.461 211.205l-39.848-6.475c-4.995-19.893-12.847-38.789-23.408-56.411l22.91-32.095a14.992 14.992 0 0 0-1.597-19.321l-42.422-42.422c-5.215-5.2-13.374-5.889-19.321-1.597l-32.095 22.91c-17.622-10.562-36.519-18.413-56.411-23.408l-6.475-39.848A14.99 14.99 0 0 0 286 0h-60a14.992 14.992 0 0 0-14.795 12.539l-6.475 39.848c-19.893 4.995-38.789 12.847-56.411 23.408l-32.095-22.91c-5.962-4.292-14.15-3.604-19.321 1.597L54.481 96.903a14.993 14.993 0 0 0-1.597 19.321l22.91 32.095c-10.562 17.622-18.413 36.519-23.408 56.411l-39.848 6.475A14.992 14.992 0 0 0 0 226v60a14.992 14.992 0 0 0 12.539 14.795l39.848 6.475c4.995 19.893 12.847 38.789 23.408 56.411l-22.91 32.095a14.992 14.992 0 0 0 1.597 19.321l42.422 42.422c5.171 5.171 13.359 5.83 19.321 1.597l32.095-22.91c17.622 10.562 36.519 18.413 56.411 23.408l6.475 39.848A14.99 14.99 0 0 0 226 512h60a14.992 14.992 0 0 0 14.795-12.539l6.475-39.848c19.893-4.995 38.789-12.847 56.411-23.408l32.095 22.91c5.947 4.233 14.106 3.574 19.321-1.597l42.422-42.422a14.993 14.993 0 0 0 1.597-19.321l-22.91-32.095c10.562-17.622 18.413-36.519 23.408-56.411l39.848-6.475A14.99 14.99 0 0 0 512 286v-60a14.992 14.992 0 0 0-12.539-14.795zM256 421c-90.981 0-165-74.019-165-165S165.019 91 256 91s165 74.019 165 165-74.019 165-165 165z" />
    <path d="M325.29 297.732C308.773 317.866 284.017 331 256 331c-28.017 0-52.773-13.134-69.291-33.268-14.379 12.744-24.868 29.451-30.654 48.197C180.784 373.387 216.224 391 256 391s75.216-17.613 99.944-45.071c-5.786-18.746-16.274-35.453-30.654-48.197z" />
  </svg>
)

Expertise.defaultProps = {
  height: '1.5rem',
  width: '1.5rem'
}

Expertise.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string
}
