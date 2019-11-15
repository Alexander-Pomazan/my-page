import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { styled } from 'linaria/react'
import BackgroundImage from 'gatsby-background-image'
import Image from 'gatsby-image'

import { Links } from 'src/components'

const links = [
  {
    url: 'https://github.com/alexander-pomazan',
    iconVariant: 'github',
    description: 'Visit my Github profile'
  },
  {
    url:
      'https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%BF%D0%BE%D0%BC%D0%B0%D0%B7%D0%B0%D0%BD-33a39718a/',
    iconVariant: 'linkedin',
    description: 'Visit my Linkedin profile'
  },
  {
    url: 'mailto:alexander.s.pomazan@gmail.com',
    iconVariant: 'gmail',
    description: 'Send me an e-mail'
  },
  {
    url: 'https://t.me/Alexandrishere',
    iconVariant: 'telegram',
    description: 'Write me on Telegram (this is the fastest way to contact me)'
  }
]

const Root = styled.header`
  position: relative;

  padding-top: 5rem;
  padding-bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
`

const ImageWrapper = styled.div`
  height: 11rem;
  width: 100%;

  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 6rem, 50% 100%, 0 6rem);
`

const Avatar = styled(Image)`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  object-fit: contain;
  margin-bottom: 0.5rem;
  position: relative;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
  text-align: center;
`

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-text-secondary);
`

export const MainContent = () => {
  const { background, avatar } = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Root>
      <ImageWrapper>
        <StyledBackgroundImage
          title="background image"
          fadeIn="soft"
          style={{ position: 'absolute' }}
          fluid={background.childImageSharp.fluid}
        />
      </ImageWrapper>

      <Avatar
        fluid={avatar.childImageSharp.fluid}
        alt="Pomazan Alexander photo"
      />

      <Title>Alexander Pomazan</Title>

      <Description>Frontend developer</Description>

      <nav aria-label="Contacts and social media">
        <Links links={links} />
      </nav>
    </Root>
  )
}
