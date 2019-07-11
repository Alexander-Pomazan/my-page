import React from 'react'
import { styled } from 'linaria/react'

import { Tabs } from 'src/components'

const tabs = ['Experience', '']

const Root = styled.section`
  display: flex;
  flex-direction: column;
  height: 300px;
`

export const AdditionalInfo = () => {
  return (
    <Root>
      <Tabs />
    </Root>
  )
}
