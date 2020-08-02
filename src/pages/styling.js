import React from 'react'
import { SEO } from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Page } from '../layout'
import { Title, Heading } from '../components/typography'
import { Spacer } from '../components/spacer'
import { Container as Grid, Row, Col } from 'react-grid-system'

const StylingPage = () => {
    const image = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "michelle-styling.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                      base64
                      tracedSVG
                      srcWebp
                      srcSetWebp
                      originalImg
                      originalName
                    }
                }
            }
        }
    `)

    return (
        <Page>
            <SEO title="Styling" />

            <Grid fluid>
                <Row>
                    <Col xs={ 12 } md={ 7 }>
                        <Title>Styling</Title>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim aspernatur corrupti et mollitia eius.</p>

                        <Spacer />
                        
                        <section>
                            <Heading>What</Heading>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, praesentium a omnis. Ipsa, sed iure molestias at accusantium itaque consequuntur saepe pariatur molestiae minus tempore in et expedita. Optio dolor iusto ipsa corrupti necessitatibus fuga cupiditate mollitia eligendi ipsam.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi veritatis excepturi ea ex et nostrum officiis, voluptatibus saepe consequuntur sint consectetur fugit, omnis alias cum iure, quaerat magni esse asperiores soluta illo rerum! Eaque enim dolorem libero corporis architecto dolore possimus? Laudantium, atque, rerum aut praesentium voluptates alias? Id, deserunt!</p>
                        </section>
                    </Col>
                    <Col xs={ 12 } md={ 5 }>
                        <Img style={{ height: '526px' }} fluid={ image.file.childImageSharp.fluid } />
                    </Col>
                </Row>
            </Grid>

        </Page>
    )
}

export default StylingPage
