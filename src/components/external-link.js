import React, { useMemo } from 'react'
import { styled } from 'linaria/react'

import { externalLinkPropTypes } from 'src/common-prop-types'
import { Icon } from 'src/components'
import { isPhoneOrEmail } from 'src/helpers'

const LinksItem = styled.li``

const Link = styled.a``

export const ExternalLink = ({ url, iconVariant }) => {
  const target = useMemo(() => (isPhoneOrEmail(url) ? '_self' : '_blank'), [
    url
  ])

  return (
    <LinksItem key={url}>
      <Link href={url} target={target} rel="noopener noreferrer">
        <Icon variant={iconVariant} />
      </Link>
    </LinksItem>
  )
}

ExternalLink.propTypes = externalLinkPropTypes
