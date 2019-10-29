import React from 'react'

import { SEO, Layout, CardsRoot, ThemeController } from 'src/components'

import 'reset-css'
import '../global.css'

// eslint-disable-next-line no-console
console.log(
  '%cHello there, fellow engineer! Like my code? Check out more of it here: https://github.com/AlexOuttaspace',
  'color: #7986cb;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 0.1px #e57373;'
)

const IndexPage = () => {
  return (
    <ThemeController>
      <Layout>
        <SEO title="Home" />
        <CardsRoot />
      </Layout>
    </ThemeController>
  )
}

// eslint-disable-next-line import/no-default-export
export default IndexPage
