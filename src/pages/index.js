import React from 'react'

import { SEO, Layout, CardsRoot } from 'src/components'

import 'reset-css'
import '../global.css'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <CardsRoot />
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default IndexPage
