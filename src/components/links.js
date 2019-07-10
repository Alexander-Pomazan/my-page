import React from 'react'
import { styled } from 'linaria/react'

import { Icon } from 'src/components'

const Navigation = styled.nav``

const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;

  > *:not(:last-child) {
    margin-right: 1rem;
  }
`

const LinksItem = styled.li``

const ExternalLink = styled.a``

export const Links = () => {
  return (
    <Navigation>
      <LinksList>
        <LinksItem>
          <ExternalLink
            href="https://github.com/AlexOuttaspace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon variant="github" />
          </ExternalLink>
        </LinksItem>

        <LinksItem>
          <ExternalLink
            href="https://github.com/AlexOuttaspace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon variant="linkedin" />
          </ExternalLink>
        </LinksItem>
      </LinksList>
    </Navigation>
  )
}
