import React from 'react'
import { SEO } from '../components/seo'
import { Page } from '../layout'
import { Title, Heading, Subheading, Paragraph } from '../components/typography'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { BulletedList, ListItem } from '../components/list'

const Covid19Page = () => (
    <Page>
        <SEO title="COVID-19 Updates" />

        <Grid fluid>
            <Row gutterWidth={ 64 }>
                <Col xs={ 12 } lg={ 8 } push={{ lg: 2 }}>
                    <Title>COVID-19 Updates</Title>

                    <Paragraph>
                        At Local Salon, we have implemented the following safety measures to protect our clients and our stylists.
                    </Paragraph>

                    <Heading>Local Salon Policies</Heading>

                    <BulletedList>
                        <ListItem>
                            Only one client per stylist at a time&mdash;please do not bring any guests or children.
                            If you are someone who needs assistance with your appointment, you may have one person with you.
                        </ListItem>
                        <ListItem>
                            There is no longer a waiting area inside the salon.
                            Upon arrival, please text your stylist to check-in and stay in your car until called to be let in.
                        </ListItem>
                        <ListItem>
                            If you (or anyone in your household) are experiencing any symptoms (fever, chills, sore throat, aches,
                            or <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html" target="_blank" rel="noopener noreferrer">any other symptoms else listed by the CDC</a>),
                            have been in contact with anyone sick, or are awaiting test results, then you will need to reschedule by email or phone.
                        </ListItem>
                        <ListItem>
                            Masks will be worn at all times by all people in the building.
                            If you cannot procure a mask, you will be provided one at the door.
                        </ListItem>
                        <ListItem>
                            Follow your stylist to the chair, and stay seated unless directed otherwise.
                        </ListItem>
                        <ListItem>
                            Only one client is permitted in each of the shampoo and processing rooms at a time,
                            and those seating areas are cleaned between guests.
                        </ListItem>
                        <ListItem>
                            Restroom use: Stylists and clients will wash their hands with soap and water for a minimum of 20 seconds.
                        </ListItem>
                        <ListItem>
                            Stylists will wash their hands between each client. 
                        </ListItem>
                    </BulletedList>

                    <Heading>My Policies</Heading>

                    <Paragraph>
                        The above Local Salon COVID-19 policies have necessitated some changes to my services and the way my appointments will operate.
                        In addition to the items listed below, please know that I am currently working on a limited schedule and will be until further notice.
                    </Paragraph>

                    <Subheading>Services</Subheading>

                    <BulletedList>
                        <ListItem>I will not be offering any waxing services until further notice.</ListItem>
                        <ListItem>I will only be doing dry cuts, so please come with clean hair, dry to almost dry. Contact me for questions about individual appointments.</ListItem>
                        <ListItem>Blow dries with color services will be limited, and please let me know ahead of time if you would like one after your color service.</ListItem>

                    </BulletedList>

                   <Subheading>Appointment</Subheading>

                    <BulletedList>
                        <ListItem>Appointments will be kept as brief as possible, without compromising services provided.</ListItem>
                        <ListItem>When you arrive, please sanitize your hands, and I will check your temperature. If it is 100&deg;F or above, we will need to reschedule your apointment.</ListItem>
                        <ListItem>Limit the number of items brought in with you, I only have a small space for you to set a few small items - this is to keep track of areas to sanitize.</ListItem>
                        <ListItem>I prefer not to accept cash at this time, and will send a Square invoice while you're still in my chair.</ListItem>
                        <ListItem>If you're purchasing product, I will remove it from the shelf and provide it to you when you leave.</ListItem>
                    </BulletedList>

                    <Subheading>What I'm Doing</Subheading>

                    <Paragraph>
                        While all of these policies are in place to protect clients and stylists inside Local Salon, I am implementing further measures.
                        These measures include:
                        <BulletedList>
                            <ListItem>Disinfecting all of my tools and equipment between appointments, including the chair and any areas you might come into contact with</ListItem>
                            <ListItem>Utilizing a UV-C cabinet to sanitize my cutting implements</ListItem>
                            <ListItem>Utilizing a sanitized set of drawers to individually house towels, clips, and combs for each appointment</ListItem>
                            <ListItem>Wearing a clean apron for each client</ListItem>
                            <ListItem>Letting clients in and out of the building so you do not have to touch doorknobs</ListItem>
                            <ListItem>Wearing an N-95 comparable mask, and will be happy to wear a shield as well upon request</ListItem>
                            <ListItem>Practicing extreme precaution outside of work</ListItem>
                        </BulletedList>
                    </Paragraph>

                    <Paragraph>If you have further questions, please don't hesitate to ask! Thank you for your consideration!</Paragraph>
                </Col>
            </Row>
        </Grid>
    </Page>
)

export default Covid19Page
