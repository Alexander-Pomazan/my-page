import React from 'react'
import { styled } from 'linaria/react'

import { Icon, TabHeader } from 'src/components'
import { appearAnimation } from 'src/theme'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
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
  color: var(--contrast-text-color);
  font-weight: 500;
  padding-left: 0.4rem;
  padding-right: 0.8rem;
`

const skills = [
  {
    technologyColor: 'rgba(227, 79, 38, 1)',
    iconSize: '65%',
    iconVariant: 'html-colored',
    skillName: 'HTML',
    contrastTextColor: '#C74F00'
  },
  {
    technologyColor: 'rgba(12, 115, 184, 0.8)',
    iconSize: '65%',
    iconVariant: 'css-colored',
    skillName: 'CSS',
    contrastTextColor: '#0C78C0'
  },
  {
    technologyColor: 'rgba(229, 162, 40, 0.8)',
    iconSize: '65%',
    iconVariant: 'javascript-colored',
    skillName: 'JavaScript',
    contrastTextColor: '#976911'
  },
  {
    technologyColor: 'rgba(1, 1, 1, 0.4)',
    iconSize: '65%',
    iconVariant: 'bem',
    skillName: 'BEM',
    contrastTextColor: '#010101'
  },
  {
    technologyColor: 'rgba(207, 100, 154, 0.5)',
    iconSize: '65%',
    iconVariant: 'sass',
    skillName: 'SASS',
    contrastTextColor: '#C63E7E'
  },
  {
    technologyColor: 'rgba(118,74,188, 0.5)',
    iconSize: '65%',
    iconVariant: 'redux',
    skillName: 'Redux',
    contrastTextColor: '#7E54BF'
  },
  {
    technologyColor: 'rgba(32,35,42, 0.9)',
    iconSize: '65%',
    iconVariant: 'react',
    skillName: 'React',
    contrastTextColor: '#20232A'
  },
  {
    technologyColor: 'rgba(51,51,51, 0.3)',
    iconSize: '65%',
    iconVariant: 'apollo',
    skillName: 'Apollo',
    contrastTextColor: '#666666'
  },
  {
    technologyColor: 'rgba(0,0,0, 0.4)',
    iconSize: '65%',
    iconVariant: 'next',
    skillName: 'Next',
    contrastTextColor: '#666666'
  },
  {
    technologyColor: 'rgb(218, 70, 72)',
    iconSize: '65%',
    iconVariant: 'gulp',
    skillName: 'Gulp',
    contrastTextColor: '#D52F31'
  },
  {
    technologyColor: 'rgb(142,214,251)',
    iconSize: '65%',
    iconVariant: 'webpack',
    skillName: 'Webpack',
    contrastTextColor: '#0475B4'
  },
  {
    technologyColor: 'rgba(0,122,204, 0.5)',
    iconSize: '55%',
    iconVariant: 'typescript',
    skillName: 'Typecript',
    contrastTextColor: '#0074C2'
  }
]

export const Expertise = () => (
  <section>
    <TabHeader>Technologies I know and use</TabHeader>

    <List>
      {skills.map((skill, index) => (
        <Chip
          key={skill.skillName}
          style={{
            '--contrast-text-color': skill.contrastTextColor,
            '--technology-color': skill.technologyColor,
            '--appear-animation-delay': `${index * 20}ms`
          }}
          elementIndex={index}
          className={appearAnimation}
        >
          <ChipsIconWrapper>
            <Icon
              height={skill.iconSize}
              width={skill.iconSize}
              variant={skill.iconVariant}
            />
          </ChipsIconWrapper>
          <ChipsText>{skill.skillName}</ChipsText>
        </Chip>
      ))}
    </List>
  </section>
)
