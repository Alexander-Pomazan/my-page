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
  color: var(--technology-color);
  font-weight: 500;
  padding-left: 0.4rem;
  padding-right: 0.8rem;
`

const skills = [
  {
    technologyColor: 'rgba(227, 79, 38, 0.8)',
    iconSize: '65%',
    iconVariant: 'html-colored',
    skillName: 'HTML'
  },
  {
    technologyColor: 'rgba(12, 115, 184, 0.8)',
    iconSize: '65%',
    iconVariant: 'css-colored',
    skillName: 'CSS'
  },
  {
    technologyColor: 'rgba(229, 162, 40, 0.8)',
    iconSize: '65%',
    iconVariant: 'javascript-colored',
    skillName: 'JavaScript'
  },
  {
    technologyColor: 'rgba(1, 1, 1, 0.4)',
    iconSize: '65%',
    iconVariant: 'bem',
    skillName: 'BEM'
  },
  {
    technologyColor: 'rgba(207, 100, 154, 0.5)',
    iconSize: '65%',
    iconVariant: 'sass',
    skillName: 'SASS'
  },
  {
    technologyColor: 'rgba(118,74,188, 0.5)',
    iconSize: '65%',
    iconVariant: 'redux',
    skillName: 'Redux'
  },
  {
    technologyColor: 'rgba(32,35,42, 0.9)',
    iconSize: '65%',
    iconVariant: 'react',
    skillName: 'React'
  },
  {
    technologyColor: 'rgba(51,51,51, 0.3)',
    iconSize: '65%',
    iconVariant: 'apollo',
    skillName: 'Apollo'
  },
  {
    technologyColor: 'rgba(0,0,0, 0.4)',
    iconSize: '65%',
    iconVariant: 'next',
    skillName: 'Next'
  },
  {
    technologyColor: 'rgb(218, 70, 72)',
    iconSize: '65%',
    iconVariant: 'gulp',
    skillName: 'Gulp'
  },
  {
    technologyColor: 'rgb(142,214,251)',
    iconSize: '65%',
    iconVariant: 'webpack',
    skillName: 'Webpack'
  },
  {
    technologyColor: 'rgba(0,122,204, 0.5)',
    iconSize: '55%',
    iconVariant: 'typescript',
    skillName: 'Typecript'
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
