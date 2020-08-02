import React from 'react'
import { SEO } from '../components/seo'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Page } from '../layout'
import { Title, Heading } from '../components/typography'
import { Spacer } from '../components/spacer'
import { Container as Grid, Row, Col } from 'react-grid-system'

const HairPage = () => {
    const image = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "michelle-hair.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
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
            <SEO title="Hair" />

            <Grid fluid>
                <Row gutterWidth={ 50 }>
                    <Col xs={ 12 } md={ 6 }>
                        <Img style={{ height: '794px', marginTop: '7rem' }} fluid={ image.file.childImageSharp.fluid } />
                    </Col>
                    <Col xs={ 12 } md={ 6 }>
                        <Title>Hair</Title>

                        <p>
                            Hello, I’m Michelle Scaraglino!
                            I entered the beauty industry in 2006 at the Aveda Institute of Chapel Hill,
                            and I have worked as a hairdresser ever since.
                            I’m passionate about helping people feel beautiful,
                            while making sure their hair is not a source of stress and works for their day-to-day lives.
                            To me, hair is an accessory and can be such asource of empowerment and confidence.
                        </p>

                        <p>
                            Check out <a href="https://www.instagram.com/somethingcool" target="_blank" rel="noopener noreferrer">my instagram</a> to see some of my work!
                        </p>

                        <p>
                            It is important to me to use cruelty-free and vegan color lines where possible.
                            I do continue to use Redken Shades EQ, because I have yet to find a great replacement.
                            I cannot get a straight answer on whether that line is vegan. For permanent and semi permanentcolors I use Pulp Riot.
                            I also use cruelty free and (almost all) vegan styling products.
                            Amika is such a great line, and—while I am always keeping my eyes open for a new favorite—this is what I carry currently.
                            They have a handful of products that contain lanolin or honey, and will happily direct you to the products that do not.
                            <Link to="/contact">You can reach out to me with questions</Link>, and I will respond as soon as possible.
                            Thanks for looking!
                        </p>

                        <Spacer />
                        
                        <Heading>Services</Heading>

                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li>Cropped Cut &ndash; $50</li>
                            <li>Short Styled Cut &ndash; $65</li>
                            <li>Long Cut &ndash; $75</li>
                            <li>Color Retouch &ndash; $85</li>
                            <li>Full Single Process Color &ndash; $100</li>
                            <li>Glaze &ndash; $25+</li>
                            <li>Express Toner &ndash; $25</li>
                            <li>Half Foil &ndash; $85</li>
                            <li>Full Foil &ndash; $125</li>
                            <li>Accent Foil &ndash; $7</li>
                            <li>Balayage &ndash; $125+</li>
                        </ul>
                    </Col>
                </Row>
            </Grid>

        </Page>
    )
}

export default HairPage
