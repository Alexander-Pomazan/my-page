import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { externalLinkPropTypes } from 'src/common-prop-types'
import { ExternalLink } from 'src/components'

const Navigation = styled.nav``

const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;

  > *:not(:last-child) {
    margin-right: 1rem;
  }
`

export const Links = ({ links }) => {
  return (
    <Navigation>
      <LinksList>
        {links.map((link) => (
          <ExternalLink
            key={link.url}
            url={link.url}
            iconVariant={link.iconVariant}
          />
        ))}
      </LinksList>
    </Navigation>
  )
}

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape(externalLinkPropTypes).isRequired)
    .isRequired
}
