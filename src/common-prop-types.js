import PropTypes from 'prop-types'

export const externalLinkPropTypes = {
  url: PropTypes.string.isRequired,
  iconVariant: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export const tabPropType = PropTypes.shape({
  tabName: PropTypes.string.isRequired,
  iconVariant: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}).isRequired
