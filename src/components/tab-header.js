import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

const Title = styled.h2`
  color: var(--color-text-primary);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.2rem;
`

const Header = styled.header`
  margin-bottom: 1.2rem;
`

export const TabHeader = ({ children, className }) => (
  <Header className={className}>
    <Title>{children}</Title>
  </Header>
)

TabHeader.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}
