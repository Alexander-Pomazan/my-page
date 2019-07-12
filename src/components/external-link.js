import React, { useMemo } from 'react'
import { styled } from 'linaria/react'

import { externalLinkPropTypes } from 'src/common-prop-types'
import { Icon } from 'src/components'
import { isPhoneOrEmail } from 'src/helpers'

const Link = styled.a`
  position: relative;
  display: block;

  :focus {
    outline: none;
  }

  svg {
    height: 2rem;
    width: 2rem;
    transition: opacity var(--transition-medium),
      transform var(--transition-medium);

    :nth-child(1) {
      fill: var(--color-grey-400);
    }

    :nth-child(2) {
      position: absolute;
      left: 0;
      top: 0;
      fill: var(--color-primary-light);
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
      opacity: 1;
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
