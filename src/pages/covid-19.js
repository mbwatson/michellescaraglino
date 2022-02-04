import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SEO } from '../components/seo'
import { Page } from '../layout'
import { Container as Grid, Row, Col } from 'react-grid-system'

const Covid19Page = () => {
  const data = useStaticQuery(covidQuery)
  const content = data.content.html

  return (
    <Page>
      <SEO
        title="COVID-19 Updates"
        description="Learn what precautions we're taking at Local Salon to keep our clients safe during the pandemic."
      />

      <Grid fluid>
        <Row gutterWidth={ 64 }>
          <Col xs={ 12 } lg={ 8 } push={{ lg: 2 }}>

            <div className="content" dangerouslySetInnerHTML={{ __html: content }} />

          </Col>
        </Row>
      </Grid>
    </Page>
  )
}

const covidQuery = graphql`{
  content: markdownRemark(fileAbsolutePath: {regex: "/content\/covid.md/"}) {
    html
  }
}`

export default Covid19Page
