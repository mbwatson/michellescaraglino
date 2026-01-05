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
        title="Cancellation & Late Policy"
        description="Please review the following policies regarding cancellations and late arrivals."
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
  content: markdownRemark(fileAbsolutePath: {regex: "/content\/policy.md/"}) {
    html
  }
}`

export default Covid19Page
