import React from 'react'
import { styled } from 'linaria/react'

import { Icon } from 'src/components'

const Root = styled.section``

const Title = styled.h2`
  color: var(--color-primary-main);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.2rem;
`

const Header = styled.header`
  margin-bottom: 2rem;
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Chip = styled.li`
  margin: 0.4rem;

  :last-child {
    margin-right: 0;
  }

  :first-child {
    margin-left: 0;
  }

  height: 2rem;
  border-radius: 1.5rem;

  color: var(--color-text-primary);
  cursor: default;
  display: inline-flex;

  min-width: 3rem;
  font-size: 0.8125rem;

  align-items: center;
  white-space: nowrap;
  vertical-align: middle;
  justify-content: center;

  border: 1px solid var(--technology-color);
  background-color: transparent;
`

const ChipsIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 100%;
  width: 2rem;
  align-self: flex-start;
  background-color: var(--technology-color);
  margin-left: -1px;
`

const ChipsText = styled.span`
  color: var(--technology-color);
  font-weight: 500;
  padding-left: 0.4rem;
  padding-right: 0.8rem;
`

export const Expertise = () => (
  <Root>
    <Header>
      <Title>Technologies I know and use</Title>
    </Header>

    <section>
      <List>
        <Chip style={{ '--technology-color': 'rgba(227, 79, 38, 0.8)' }}>
          <ChipsIconWrapper>
            <Icon height="65%" width="65%" variant="html-colored" />
          </ChipsIconWrapper>
          <ChipsText>HTML</ChipsText>
        </Chip>

        <Chip style={{ '--technology-color': 'rgba(12, 115, 184, 0.8)' }}>
          <ChipsIconWrapper>
            <Icon height="65%" width="65%" variant="css-colored" />
          </ChipsIconWrapper>
          <ChipsText>CSS</ChipsText>
        </Chip>

        <Chip style={{ '--technology-color': 'rgba(229, 162, 40, 0.8)' }}>
          <ChipsIconWrapper>
            <Icon height="65%" width="65%" variant="javascript-colored" />
          </ChipsIconWrapper>
          <ChipsText>JavaScript</ChipsText>
        </Chip>

        <Chip style={{ '--technology-color': 'rgba(1, 1, 1, 0.4)' }}>
          <ChipsIconWrapper>
            <Icon height="65%" width="65%" variant="bem" />
          </ChipsIconWrapper>
          <ChipsText>BEM</ChipsText>
        </Chip>

        <Chip style={{ '--technology-color': 'rgba(207, 100, 154, 0.5)' }}>
          <ChipsIconWrapper>
            <Icon height="65%" width="65%" variant="sass" />
          </ChipsIconWrapper>
          <ChipsText>SASS</ChipsText>
        </Chip>

        <Chip style={{ '--technology-color': 'rgba(118,74,188, 0.5)' }}>
          <ChipsIconWrapper>
            <Icon height="65%" width="65%" variant="redux" />
          </ChipsIconWrapper>
          <ChipsText>Redux</ChipsText>
        </Chip>

        <Chip style={{ '--technology-color': 'rgba(32,35,42, 0.9)' }}>
          <ChipsIconWrapper>
            <Icon height="65%" width="65%" variant="react" />
          </ChipsIconWrapper>
          <ChipsText>React</ChipsText>
        </Chip>

        <Chip style={{ '--technology-color': 'rgba(51,51,51, 0.3)' }}>
          <ChipsIconWrapper>
            <Icon height="65%" width="65%" variant="apollo" />
          </ChipsIconWrapper>
          <ChipsText>Apollo</ChipsText>
        </Chip>

        <Chip style={{ '--technology-color': 'rgba(0,0,0, 0.2)' }}>
          <ChipsIconWrapper>
            <Icon height="65%" width="65%" variant="next" />
          </ChipsIconWrapper>
          <ChipsText>Next</ChipsText>
        </Chip>

        <Chip style={{ '--technology-color': 'rgb(218, 70, 72)' }}>
          <ChipsIconWrapper>
            <Icon height="65%" width="65%" variant="gulp" />
          </ChipsIconWrapper>
          <ChipsText>Gulp</ChipsText>
        </Chip>

        <Chip style={{ '--technology-color': 'rgb(142,214,251)' }}>
          <ChipsIconWrapper>
            <Icon height="65%" width="65%" variant="webpack" />
          </ChipsIconWrapper>
          <ChipsText>Webpack</ChipsText>
        </Chip>

        <Chip style={{ '--technology-color': 'rgba(0,122,204, 0.5)' }}>
          <ChipsIconWrapper>
            <Icon height="55%" width="55%" variant="typescript" />
          </ChipsIconWrapper>
          <ChipsText>Typecript</ChipsText>
        </Chip>
      </List>
    </section>
  </Root>
)
