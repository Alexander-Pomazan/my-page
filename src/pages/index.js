import React from 'react'

import 'reset-css'
import '../global.css'

import { SEO, Layout, CardsRoot } from 'src/components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CardsRoot />
  </Layout>
)

// eslint-disable-next-line import/no-default-export
export default IndexPage
