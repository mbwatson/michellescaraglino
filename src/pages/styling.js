import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Page } from '../layout'
import { Title, Subheading, Paragraph } from '../components/typography'
import { Container as Grid, Row, Col, Hidden, Visible } from 'react-grid-system'
import { BulletedList, ListItem } from '../components/list'
import { Spacer } from '../components/spacer'
import { Quote } from '../components/quote'

const StylingPage = () => {
    const image = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "michelle-styling.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)

    return (
        <Page>
            <SEO title="Styling" />

            <Grid fluid>
                <Row gutterWidth={ 64 }>
                    <Col xs={ 12 } lg={ 6 } push={{ lg: 1 }}>
                        <Visible xs sm><br/><br/></Visible>
                        <Title>Styling</Title>

                        <Paragraph>
                            Since I was a teenager, I've used my clothing to express my personality. Our clothes are one of the ways we show the world who we are, whether we like it or not. I'm a firm believer that what you wear should make you feel good and feel like your best self, and in turn  you'll be projecting the image you wish for others to see. Style is extremely personal; I don't take this for granted when someone allows me into their closet. I seek to help you feel comfortable in your own skin and confident in who you are through your clothes. Sometimes this just means tweaking the fit of an item, or having help accessorizing. I don't believe in cookie cutter style, and I do believe that all bodies are worthy and beautiful. For many people,  it takes someone else's perspective for you to see yourself this way. 
                        </Paragraph>
                        <Paragraph>
                            Proudly serving women/femme/nonbinary clients.
                        </Paragraph>
                        <Paragraph>
                            If you're interested in any of the following services,
                            please contact me to schedule a virtual meeting and consultation. (All services will be virtual for the time being)
                        </Paragraph>

                        <Spacer />
                        
                        <section>
                            <Subheading>Wardrobe Editing</Subheading>
                            <Paragraph>
                                Having a second pair of eyes to help you rid your closet of items that
                                no longer serve you&mdash;poor fit, not your style,
                                don't represent who you are, outdated, etc.
                            </Paragraph>
                        </section>

                        <section>
                            <Subheading>Outfit Curating</Subheading>

                            <Paragraph>
                                Using what you have in your closet&mdash;including shoes and accessories&mdash;I help you create modern
                        outfits that express your personality accurately and appropriately
                                to meet your needs for work, public speaking, etc.
                                A photo gallery will be kept for easy access to streamline your mornings/meetings/engagements.
                                If desired, I'm happy to consult with you on your hairstyle/color suitability.
                            </Paragraph>
                        </section>

                        <section>
                            <Subheading>Personal Shopping</Subheading>

                            <Paragraph>
                                Once a wardrobe edit and image consulting session have been done,
                                we will establish if you are missing key pieces to make
                                more well-rounded outfits that make you feel your best.
                                If you don't want to shop for items yourself, we can add on a virtual shopping session where I curate some shopping carts/lists for you to pick through.
                            </Paragraph>

                            <Paragraph>
                                Because the fashion industry unfortunately is a major culprit of water and air pollution,
                                as well as unethical working conditions around the globe,
                                it's important to me to shop as ethically as possible, when possible... no one is perfect, of course :).
                                For myself, this often means second-hand gems and specialty items from ethical clothing companies.
                                (See a list of some of my favorite sites below!).
                                If this resonates with you, I'll be excited to help you on that journey since I'm on it as well. Let me know what's important to you, of course - and we'll go from there!
                            </Paragraph>
                        </section>

                        <Spacer />

                        <section>
                            <Subheading>Shopping Links</Subheading>
                            
                            <BulletedList>
                                <ListItem><a href="https://www.thredup.com/" target="_blank" rel="noopener noreferrer">ThredUp</a></ListItem>
                                <ListItem><a href="https://www.therealreal.com/" target="_blank" rel="noopener noreferrer">The RealReal</a></ListItem>
                                <ListItem><a href="https://bhavastudio.com/" target="_blank" rel="noopener noreferrer">Bhava Studio</a></ListItem>
                                <ListItem><a href="https://edgeofurge.com/" target="_blank" rel="noopener noreferrer">Edge of Urge</a></ListItem>
                            </BulletedList>

                         <Paragraph>
                            If you have a favorite, <Link to="/contact">send me a link</Link>! 
                         </Paragraph>

                        </section>

                        <Spacer />

                        <section>
                            <Subheading>What others have said after working with Michelle:</Subheading>

                            <Quote
                                quote={ `
                                    "​I'm still smiling every time I think of you and our time together... You shine bright and have a lot to give.
                                    I feel much more confident going into these photo shoots after having worked with you."
                                ` }
                                author={
                                    <Fragment>
                                       Janet Boudreau, Vistage Chair & High Performing Culture Certified Consultant, <a href="https://www.vistage.com">Vistage Worlwide, Inc.</a>
                                    </Fragment>
                                }
                            />

                            <Quote
                                quote={ `
                                    "I was preparing for a high stakes keynote presentation at the Savor Life Summit... and Michelle to the rescue.
                                    Using clothes and accessories already in my closet, Michelle made sure that my look was current and professional with a twist that increased my confidence and personal style.
                                    As I approached the main stage I heard attendees whispering, "Wow, love her look!" My appearance and look was a smash! Thank you, Michelle!"
                                ` }
                                author={
                                    <Fragment>
                                        Stephanie Scotti, <a href="https://professionallyspeaking.net/author/adminprospeak/" target="_blank" rel="noopener noreferrer">Professionally Speaking</a>
                                    </Fragment>
                                }
                            />


                            <Quote
                                quote={ `
                                    "Every quarter, Michelle has edited my closet and created 5-6 outfits all the way down to the jewelry.
                                    I take photos and save them in Evernote to look at on Sundays when I create my outfits for the week.
                                    This has helped with the female penalty of decision-fatigue that comes about from deciding what to wear in the mornings.
                                    I have an image I want to portray as a professional speaker and Michelle helps me do it with ease."
                                ` }
                                author={
                                    <Fragment>
                                        <a href="https://www.marceyrader.com" target="_blank" rel="noopener noreferrer">Marcey Rader</a>, Productivity Coach, <br/>
                                        <a href="https://www.amazon.com/Work-Well-Play-More-Clutter-Free-ebook/dp/B07Z5B7CVD" target="_blank" rel="noopener noreferrer">​Work Well, Play More</a>
                                    </Fragment>
                                }
                            />

                            <Quote
                                quote={ `
                                    "Michelle was so easy to work with. She took the time to understand what I was looking for and then made suggestions
                                    on ways to creatively use clothing I already had in my closet that just wasn't getting used.
                                    She also provided me with the language I needed to describe clothing that was flattering for my particular shape.
                                    That language was critical for being able to go out on my own to shop and find flattering outfits.
                                    She also provided feedback on how to pair clothing with shoes, jewelry and accessories to make mixing and matching easier.
                                    I've already made two key purchases using her recommendations and received a ton of compliments.
                                    Her knowledge and willingness to provide feedback has been invaluable. I highly recommend her services!"
                                ` }
                                author={
                                    <Fragment>
                                        Melisa Galasso, Founder & CEO, <br />
                                        <a href="https://galassolearningsolutions.com/" target="_blank" rel="noopener noreferrer">Galasso Learning Solutions</a>
                                    </Fragment>
                                }
                            />
                        </section>

                    </Col>
                    <Col xs={ 12 } lg={ 5 } push={{ lg: 1 }}>
                        <Hidden xs sm><br/><br/><br/><br/><br/><br/></Hidden>
                        <Img style={{ height: '526px' }} fluid={ image.file.childImageSharp.fluid } />
                    </Col>
                </Row>
            </Grid>

        </Page>
    )
}

export default StylingPage
