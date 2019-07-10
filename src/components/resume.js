import React from 'react'
import { styled } from 'linaria/react'

import { Links } from 'src/components'

const backgroundImageUrl =
  'https://www-tc.pbs.org/wgbh/nova/media/original_images/nova-wonders-whats-the-universe-made-of-hero_WxVWP1e.jpg'
const mockAvatarSrc =
  'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c7.10.183.183a/p200x200/15326393_1697302760581886_8811592823422174948_n.jpg?_nc_cat=104&_nc_oc=AQlaeYu2glCz0WjqVmYuZxlErM-CIvT-4KsmxBoQ4AsEkfXa_1DNMYGpYWc6dEbpljI&_nc_ht=scontent-frx5-1.xx&oh=da91009a0aa9f53b0a694ff382368918&oe=5DB94E61'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Root = styled.div`
  width: 100%;
  max-width: 800px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  display: flex;
`

const MainContent = styled.header`
  position: relative;

  padding-top: 3rem;
  padding-bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  flex-grow: 1;
`

const BackgroundImage = styled.div`
  background-image: url(${backgroundImageUrl});
  background-size: cover;
  background-repeat: no-repeat;

  height: 50%;
  width: 100%;

  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%);
`

const FillLeftSider = styled.div`
  flex-grow: 1;
`

const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  object-fit: contain;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`

const Title = styled.h1`
  font-size: 2rem;
`

const Description = styled.p`
  font-size: 1.5rem;
`

export const Resume = () => {
  return (
    <Wrapper>
      <Root>
        <MainContent>
          <BackgroundImage />

          <Avatar src={mockAvatarSrc} alt="Pomazan Alexander photo" />
          <Title>Alexander Pomazan</Title>
          <Description>Frontend developer</Description>
          <Links />
        </MainContent>

        <FillLeftSider />
      </Root>
    </Wrapper>
  )
}
