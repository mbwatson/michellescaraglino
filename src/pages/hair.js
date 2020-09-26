import React from 'react'
import { SEO } from '../components/seo'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Page } from '../layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { Spacer } from '../components/spacer'
import { Container as Grid, Row, Col, Hidden, Visible } from 'react-grid-system'
import { BulletedList, List, ListItem } from '../components/list'
import { Detail } from '../components/detail'

const HairPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "michelle-hair.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)

    return (
        <Page>
            <SEO title="Hair" />

            <Grid fluid>
                <Row gutterWidth={ 64 }>
                    <Col xs={ 12 } lg={ 6 }>
                        <Hidden xs sm><br/><br/><br/><br/><br/></Hidden>
                        <Img style={{ height: '900px' }} fluid={ data.image.childImageSharp.fluid } />
                    </Col>
                    <Col xs={ 12 } lg={ 6 }>
                        <Visible xs sm><br/><br/></Visible>
                        <Title>Hair</Title>

                        <Paragraph>
                            Hello, I’m Michelle Scaraglino!
                            I entered the beauty industry in 2006 at the Aveda Institute of Chapel Hill,
                            and I have worked as a hairdresser ever since.
                            I’m passionate about helping people feel beautiful and confident,
                            while making sure their hair is not a source of stress and works for their day-to-day lives.
                            To me, hair is an accessory and can be such asource of empowerment and confidence.
                        </Paragraph>

                        <Paragraph>
                            Check out <a href="https://www.instagram.com/michellescaraglinohair" target="_blank" rel="noopener noreferrer">my instagram</a> to see some of my work!
                        </Paragraph>

                        <Paragraph>
                            It's important to me to use cruelty-free and vegan color lines where possible.
                            I do continue to use Redken Shades EQ, but am working to replace it with Pulp Riot's brand new demi-permanent color line. (woohoo!)
                            For permanent and semi-permanent colors I use Pulp Riot.
                       </Paragraph>

                       <Paragraph>
                            I also use cruelty free and (almost all) vegan styling products.
                        </Paragraph>

                       <BulletedList>
                            <ListItem>
                                <a href="https://loveamika.com/?cn=michellescaraglinohair%2Flocalsalon&offerid=43923&rfsn=3972380.935c7a&utm_campaign=3972380.935c7a&utm_medium=affiliate&utm_source=refersion" target="_blank" rel="noopener noreferrer">Amika</a> is
                                such a great line, and—while I am always keeping my eyes open for a new favorite—this is what I carry currently.
                                They have a handful of products that contain lanolin or honey, and will happily direct you to the products that do not.
                            </ListItem>
                            <ListItem>
                                I also use a handful of <a href="https://www.hairstory.com/?r=300000052" rel="noopener noreferrer">Hairstory</a> products
                                &mdash; not an entirely vegan line, by any means &mdash;
                                but they do make some amazing styling products.
                            </ListItem>
                            <ListItem>
                                <a href="https://cultandking.com/ref/michellescaraglino/" target="_blank" rel="noopener noreferrer">Cult + King</a> is
                                an awesome boutique product line with all vegan, extremely clean products. They even have refillable packaging!
                            </ListItem>
                       </BulletedList>

                       <Paragraph>
                            If you use the links above to shop, I'll receive a small commission. You can <Link to="/contact">reach out to me with questions</Link>, and I'll respond as soon as possible.
                            Thanks for looking!
                        </Paragraph>

                        <Spacer />
                        
                        <Heading>Services</Heading>

                        <List>
                            <ListItem><Detail name="Cropped Cut" value="$50" /></ListItem>
                            <ListItem><Detail name="Short Styled Cut" value="$65" /></ListItem>
                            <ListItem><Detail name="Long Cut" value="$75" /></ListItem>
                            <ListItem><Detail name="Color Retouch" value="$85" /></ListItem>
                            <ListItem><Detail name="Full Single Process Color" value="$100" /></ListItem>
                            <ListItem><Detail name="Glaze" value="$35" /></ListItem>
                            <ListItem><Detail name="Express Toner" value="$25" /></ListItem>
                            <ListItem><Detail name="Half Foil" value="$85" /></ListItem>
                            <ListItem><Detail name="Full Foil" value="$125" /></ListItem>
                            <ListItem><Detail name="Accent Foil" value="$7" /></ListItem>
                            <ListItem><Detail name="Balayage" value="$125" /></ListItem>
                        </List>
                    </Col>
                </Row>
            </Grid>

        </Page>
    )
}

export default HairPage
