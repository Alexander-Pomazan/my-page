import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { FadeIn, Icon, TabHeader } from 'src/components'

const Root = styled.section`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 100%;
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  flex-grow: 1;
`

const Chip = styled.li`
  margin: 0.6rem;

  :last-child {
    margin-right: 0;
  }

  :first-child {
    margin-left: 0;
  }

  height: 2rem;
  border-radius: 1.5rem;

  cursor: default;
  display: inline-flex;

  min-width: 3rem;
  font-size: 0.8125rem;

  align-items: center;
  white-space: nowrap;
  vertical-align: middle;
  justify-content: center;

  border: 2px solid var(--technology-color);
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
  margin-left: -2px;

  svg {
    height: ${(p) => p.iconSize};
    width: ${(p) => p.iconSize};
  }
`

const ChipsText = styled.span`
  color: var(--color-text-primary);
  font-weight: 500;
  padding-left: 0.4rem;
  padding-right: 0.8rem;
`

const skills = [
  {
    technologyColor: '#E34F26',
    iconSize: '65%',
    iconVariant: 'html-colored',
    skillName: 'HTML',
    contrastTextColor: '#C74F00'
  },
  {
    technologyColor: '#3C8FC6',
    iconSize: '65%',
    iconVariant: 'css-colored',
    skillName: 'CSS',
    contrastTextColor: '#0C78C0'
  },
  {
    technologyColor: '#EAB453',
    iconSize: '65%',
    iconVariant: 'javascript-colored',
    skillName: 'JavaScript',
    contrastTextColor: '#976911'
  },
  {
    technologyColor: '#999999',
    iconSize: '65%',
    iconVariant: 'bem',
    skillName: 'BEM',
    contrastTextColor: '#010101'
  },
  {
    technologyColor: '#E7B0CC',
    iconSize: '65%',
    iconVariant: 'sass',
    skillName: 'SASS',
    contrastTextColor: '#C63E7E'
  },
  {
    technologyColor: '#BAA4DD',
    iconSize: '65%',
    iconVariant: 'redux',
    skillName: 'Redux',
    contrastTextColor: '#7E54BF'
  },
  {
    technologyColor: '#35383E',
    iconSize: '65%',
    iconVariant: 'react',
    skillName: 'React',
    contrastTextColor: '#20232A'
  },
  {
    technologyColor: '#C1C1C1',
    iconSize: '65%',
    iconVariant: 'apollo',
    skillName: 'Apollo',
    contrastTextColor: '#666666'
  },
  {
    technologyColor: '#999999',
    iconSize: '65%',
    iconVariant: 'next',
    skillName: 'Next',
    contrastTextColor: '#666666'
  },
  {
    technologyColor: '#DA4548',
    iconSize: '65%',
    iconVariant: 'gulp',
    skillName: 'Gulp',
    contrastTextColor: '#D52F31'
  },
  {
    technologyColor: '#8ED5FB',
    iconSize: '65%',
    iconVariant: 'webpack',
    skillName: 'Webpack',
    contrastTextColor: '#0475B4'
  },
  {
    technologyColor: '#7FBCE5',
    iconSize: '55%',
    iconVariant: 'typescript',
    skillName: 'Typescript',
    contrastTextColor: '#0074C2'
  }
]

export const Expertise = ({ isActive }) => (
  <Root>
    <FadeIn isIn={isActive}>
      <TabHeader>Technologies I know and use</TabHeader>
    </FadeIn>

    <List>
      {skills.map((skill, index) => (
        <FadeIn
          isIn={isActive}
          animationDelay={`${index * 20}ms`}
          key={skill.skillName}
        >
          <Chip
            style={{
              '--contrast-text-color': skill.contrastTextColor,
              '--technology-color': skill.technologyColor
            }}
            elementIndex={index}
          >
            <ChipsIconWrapper iconSize={skill.iconSize}>
              <Icon variant={skill.iconVariant} />
            </ChipsIconWrapper>
            <ChipsText>{skill.skillName}</ChipsText>
          </Chip>
        </FadeIn>
      ))}
    </List>
  </Root>
)

Expertise.propTypes = {
  isActive: PropTypes.bool.isRequired
}
