import React from 'react'
import { styled } from 'linaria/react'

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

const Chips = styled.li`
  padding: 0.5rem;
`

export const Expertise = () => (
  <Root>
    <Header>
      <Title>Technologies I know and use</Title>
    </Header>
    <section>
      <SectionTitle>Fundamentals</SectionTitle>
      <List>
        <Chips>HTML</Chips>
        <Chips>CSS</Chips>
        <Chips>JavaScript</Chips>
      </List>
    </section>

    <section>
      <SectionTitle>CSS methodologies and preprocessors</SectionTitle>
      <List>
        <Chips>BEM</Chips>
        <Chips>SCSS</Chips>
      </List>
    </section>

    <section>
      <SectionTitle>SPA stuff</SectionTitle>
      <List>
        <Chips>React</Chips>
        <Chips>Redux</Chips>
        <Chips>Apollo</Chips>
        <Chips>Next.js</Chips>
      </List>
    </section>

    <section>
      <SectionTitle>Bundlers and task runners</SectionTitle>
      <List>
        <Chips>Gulp</Chips>
        <Chips>Webpack</Chips>
      </List>
    </section>

    <section>
      <SectionTitle>Languages that are not JavaScript</SectionTitle>
      <List>
        <Chips>Typescript</Chips>
        <Chips>English (B2)</Chips>
      </List>
    </section>
  </Root>
)
