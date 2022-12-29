import React from 'react'
import { SEO } from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Page } from '../layout'
import { Heading } from '../components/typography'
import { Spacer } from '../components/spacer'
import { Container as Grid, Row, Col, Hidden, Visible } from 'react-grid-system'
import { List, ListItem } from '../components/list'
import { Detail } from '../components/detail'

const HairPage = () => {
  const data = useStaticQuery(hairQuery)
  const image = data.image
  const services = data.services.edges.map(({ node }) => node)
  const content = data.content.html

  return (
    <Page>
      <SEO
        title="Hair"
        description="My passions lie in helping people feel beautiful and confident with how they present themselves
        as well as using cruelty-free and vegan color lines."
        keywords={ ["pulp riot", "redken", "hairstory", "cult + king"] }
       />

      <Grid fluid>
        <Row gutterWidth={ 64 }>
          <Col xs={ 12 } lg={ 6 }>
            <Hidden xs sm><br/><br/><br/><br/><br/></Hidden>
            <Img style={{ height: '900px' }} fluid={ image.childImageSharp.fluid } />
          </Col>
          <Col xs={ 12 } lg={ 6 }>
            <Visible xs sm><br/><br/></Visible>
            <div className="content" dangerouslySetInnerHTML={{ __html: content }} />

            <Spacer />
            
            <Heading>Services</Heading>

            <p>
              All service prices have been adjuste to be all inclusive,
              and tipping will no longer be an option upon checkout.
            </p>

            <List>
              {
                services.map(service => (
                  <ListItem key={ service.name }><Detail name={ service.name } value={ service.price } /></ListItem>
                ))
              }
            </List>

          </Col>
        </Row>
      </Grid>

    </Page>
  )
}

const hairQuery = graphql`{
  image: file(relativePath: { eq: "michelle-hair.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  content: markdownRemark(fileAbsolutePath: {regex: "/content\/hair.md/"}) {
    html
  }
  services: allHairServicesYaml {
    edges {
      node {
        name
        price
      }
    }
  }
}`

export default HairPage
