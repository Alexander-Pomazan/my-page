import React from 'react'

import { SEO, Layout, Resume } from 'src/components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Resume />
  </Layout>
)

// eslint-disable-next-line import/no-default-export
export default IndexPage
