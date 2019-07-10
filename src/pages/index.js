import React from 'react'
import { Link } from 'gatsby'
import { styled } from 'linaria/react'

import { SEO, Layout } from 'src/components'

const Header = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

// eslint-disable-next-line import/no-default-export
export default IndexPage
