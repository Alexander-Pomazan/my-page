import React from 'react'
import PropTypes from 'prop-types'

import { Github, Linkedin } from './brands'

const icons = {
  github: Github,
  linkedin: Linkedin
}

export const Icon = ({ variant, ...iconProps }) => {
  const Icon = icons[variant]

  if (Icon === undefined) return null

  return <Icon {...iconProps} />
}

Icon.propTypes = {
  variant: PropTypes.oneOf(['github', 'linkedin']).isRequired
}
