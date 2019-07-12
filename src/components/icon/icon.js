import React from 'react'
import PropTypes from 'prop-types'

import { Github, Linkedin, Gmail, Telegram } from './brands'
import { Expertise, Experience, AboutMe } from './rest'

const icons = {
  github: Github,
  linkedin: Linkedin,
  gmail: Gmail,
  telegram: Telegram,
  expertise: Expertise,
  experience: Experience,
  'about-me': AboutMe
}

export const Icon = ({ variant, ...iconProps }) => {
  const Icon = icons[variant]

  if (Icon === undefined) return null

  return <Icon {...iconProps} />
}

Icon.propTypes = {
  variant: PropTypes.oneOf(Object.keys(icons)).isRequired
}
