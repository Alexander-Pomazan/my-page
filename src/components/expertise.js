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
  margin-bottom: 1rem;
`

const SectionTitle = styled.h3`
  color: var(--color-text-main);
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const Chip = styled.li`
  margin: 0.2rem;

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

  svg {
    height: 65%;
    width: 65%;
  }
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
      <SectionTitle>Fundamentals</SectionTitle>
      <List>
        <Chip style={{ '--technology-color': 'rgba(227, 79, 38, 0.8)' }}>
          <ChipsIconWrapper>
            <Icon variant="html-colored" />
          </ChipsIconWrapper>
          <ChipsText>HTML</ChipsText>
        </Chip>
        <Chip style={{ '--technology-color': 'rgba(12, 115, 184, 0.8)' }}>
          <ChipsIconWrapper>
            <Icon variant="css-colored" />
          </ChipsIconWrapper>
          <ChipsText>CSS</ChipsText>
        </Chip>
        <Chip style={{ '--technology-color': 'rgba(229, 162, 40, 0.8)' }}>
          <ChipsIconWrapper>
            <Icon variant="javascript-colored" />
          </ChipsIconWrapper>
          <ChipsText>JS</ChipsText>
        </Chip>
      </List>
    </section>

    <section>
      <SectionTitle>CSS methodologies and preprocessors</SectionTitle>
      <List>
        <Chip style={{ '--technology-color': 'rgb(1, 1, 1, 0.4)' }}>
          <ChipsIconWrapper>
            <Icon variant="bem" />
          </ChipsIconWrapper>
          <ChipsText>BEM</ChipsText>
        </Chip>

        <Chip style={{ '--technology-color': 'rgb(207, 100, 154, 0.5)' }}>
          <ChipsIconWrapper>
            <Icon variant="sass" />
          </ChipsIconWrapper>
          <ChipsText>SASS</ChipsText>
        </Chip>
      </List>
    </section>

    <section>
      <SectionTitle>SPA stuff</SectionTitle>
      <List>
        <Chip style={{ '--technology-color': 'rgb(118,74,188, 0.5)' }}>
          <ChipsIconWrapper>
            <Icon variant="redux" />
          </ChipsIconWrapper>
          <ChipsText>REDUX</ChipsText>
        </Chip>

        <Chip style={{ '--technology-color': 'rgb(32,35,42, 0.9)' }}>
          <ChipsIconWrapper>
            <Icon variant="react" />
          </ChipsIconWrapper>
          <ChipsText>REACT</ChipsText>
        </Chip>
        <Chip>Apollo</Chip>
        <Chip>Next.js</Chip>
      </List>
    </section>

    <section>
      <SectionTitle>Bundlers and task runners</SectionTitle>
      <List>
        <Chip>Gulp</Chip>
        <Chip>Webpack</Chip>
      </List>
    </section>

    <section>
      <SectionTitle>Languages that are not JavaScript</SectionTitle>
      <List>
        <Chip>Typescript</Chip>
        <Chip>English (B2)</Chip>
      </List>
    </section>
  </Root>
)
