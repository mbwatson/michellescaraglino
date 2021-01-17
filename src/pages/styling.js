import React from 'react'
import { SEO } from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Page } from '../layout'
import { Container as Grid, Row, Col, Hidden, Visible } from 'react-grid-system'
import { Spacer } from '../components/spacer'
import { Quote } from '../components/quote'

const StylingPage = () => {
  const data = useStaticQuery(stylingQuery)
  const image = data.image
  const content = data.content.html
  const quotes = data.quotes.edges.map(({ node }) => ({ text: node.frontmatter.quote, attribution: node.html }))

  return (
    <Page>
      <SEO
        title="Styling"
        description=""
        keywords={ ["personal styling", "closet edit"] }
       />

      <Grid fluid>
        <Row gutterWidth={ 64 }>
          <Col xs={ 12 } lg={ 6 } push={{ lg: 1 }}>
            <Visible xs sm><br/><br/></Visible>
            <div className="content" dangerouslySetInnerHTML={{ __html: content }} />

            <Spacer />

            <section>
              { quotes.map(quote => <Quote quote={ quote.text } attribution={ quote.attribution } />) }
            </section>

          </Col>
          <Col xs={ 12 } lg={ 5 } push={{ lg: 1 }}>
            <Hidden xs sm><br/><br/><br/><br/><br/><br/></Hidden>
            <Img style={{ height: '526px' }} fluid={ image.childImageSharp.fluid } />
          </Col>
        </Row>
      </Grid>

    </Page>
  )
}

const stylingQuery = graphql`{
  image: file(relativePath: { eq: "michelle-styling.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  content: markdownRemark(fileAbsolutePath: {regex: "/content\/styling.md/"}) {
    html
  }
  quotes: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content\/quotes/"}}) {
    edges {
      node {
        frontmatter {
          quote
        }
        html
      }
    }
  }
}`

export default StylingPage
