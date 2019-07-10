import React, { useMemo } from 'react'
import { styled } from 'linaria/react'
import { transparentize } from 'polished'

import { externalLinkPropTypes } from 'src/common-prop-types'
import { Icon } from 'src/components'
import { isPhoneOrEmail } from 'src/helpers'
import { theme } from 'src/theme'

const Link = styled.a`
  position: relative;
  display: block;

  :focus {
    outline: none;
  }

  svg {
    height: 2rem;
    width: 2rem;
    transition: all 0.2s ease-out;

    :nth-child(1) {
      fill: ${transparentize(0.7, theme.colors.black)};
    }

    :nth-child(2) {
      position: absolute;
      left: 0;
      top: 0;
      fill: ${theme.colors.primary};
      opacity: 0;
    }
  }

  :hover svg,
  :focus svg {
    transform: scale(1.2);

    :nth-child(1) {
      opacity: 0;
    }

    :nth-child(2) {
      fill: ${theme.colors.primary};
      opacity: 1;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`

export const ExternalLink = ({ url, iconVariant, description }) => {
  const target = useMemo(() => (isPhoneOrEmail(url) ? '_self' : '_blank'), [
    url
  ])

  return (
    <li key={url}>
      <Link
        href={url}
        target={target}
        aria-label={description}
        rel="noopener noreferrer"
      >
        <Icon variant={iconVariant} role="presentation" />
        <Icon variant={iconVariant} aria-hidden="true" />
      </Link>
    </li>
  )
}

ExternalLink.propTypes = externalLinkPropTypes
