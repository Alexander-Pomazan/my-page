import React from 'react'

import { SEO, Layout, CardsRoot } from 'src/components'

import 'reset-css'
import '../global.css'

// eslint-disable-next-line no-console
console.log(
  '%cHey there, fellow engineer! Like my code? Check out more of it here: https://github.com/AlexOuttaspace',
  'color: #7986cb;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 0.1px #e57373;'
)

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
