import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { externalLinkPropTypes } from 'src/common-prop-types'
import { ExternalLink } from 'src/components'

const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;

  > *:not(:last-child) {
    margin-right: 1.5rem;
  }
`

export const Links = ({ links }) => {
  return (
    <LinksList>
      {links.map((link) => (
        <ExternalLink
          key={link.url}
          url={link.url}
          iconVariant={link.iconVariant}
        />
      ))}
    </LinksList>
  )
}

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape(externalLinkPropTypes).isRequired)
    .isRequired
}
