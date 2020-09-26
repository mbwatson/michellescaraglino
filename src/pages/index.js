import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { SEO } from '../components/seo'
import Img from 'gatsby-image'
import { Page } from '../layout'
import { Title } from '../components/typography'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { useWindowWidth } from '@react-hook/window-size'

const LinkText = styled(Title)(({ theme }) => `
    font-family: ${ theme.font.heading };
    -webkit-text-stroke: 1px ${ theme.color.black };
    -webkit-text-fill-color: ${ theme.color.white };
`)

const Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #9a4457;
    transition: opacity 250ms;
    opacity: 0.35;
`

const StyledImg = styled(Img)`
    transition: filter 250ms;
    filter: saturate(0.1) brightness(1.1);
`

const ImageWrapper = styled.div(({ theme }) => `
    display: block;
    position: relative;
    &:hover ${ StyledImg } {
        filter: saturate(1.0) brightness(1.0);
    }
    &:hover ${ Overlay } {
        opacity: 0.0;
    }
`)

const ImageLink = styled(Link)(({ theme, compact }) => `
    text-decoration: none;
    & ${ LinkText} {
        font-size: ${ compact ? '175%' : '200%' };
    }
    &:hover ${ LinkText } {
        -webkit-text-fill-color: ${ theme.color.black };
    }
`)

const HairImageLink = styled(ImageLink)(({ compact }) => `
    & ${ StyledImg } {
        min-height: 800px;
    }
    & ${ LinkText } {
        position: absolute;
        left: ${ compact ? `calc(100% - 10rem)` : 'calc(100% - 2rem)' };
        top: ${ compact ? `-3rem` : '5rem' };
    }
`)

const StylingImageLink = styled(ImageLink)(({ compact }) => `
    display: block;
    margin-top: ${ compact ? `5rem` : `10rem` };
    & ${ StyledImg } {
        min-height: 500px;
    }
    & ${ LinkText } {
        position: absolute;
        ${ compact
            ? `left: 50%; top: 2rem; transform: translateX(-50%);`
            : `left: 50%; top: 7rem; transform: translateX(-50%);`
        }
    }
`)

const IndexPage = ({ data }) => {
    const onlyWidth = useWindowWidth()
    const [isCompact, setIsCompact] = useState()

    useEffect(() => {
        setIsCompact(onlyWidth <= 992)
    }, [onlyWidth])

    return (
        <Page>
            <SEO title="Home" />

            <Title hidden>Home</Title>

            <Grid fluid style={{
                transform: `translateX(${ isCompact ? '0' : '-3rem' })`,
                marginTop: isCompact ? '2rem' : '-7rem'
            }}>
                <Row align="center" gutterWidth={ isCompact ? 0 : 120 }>
                    <Col xs={ 12 } sm={ 12 } md={ 12 } lg={ 7 }>
                        <HairImageLink to="/hair" compact={ isCompact }>
                            <ImageWrapper>
                                <StyledImg fluid={ data.hairImage.childImageSharp.fluid } />
                                <Overlay />
                            </ImageWrapper>
                            <LinkText>HAIR</LinkText>
                        </HairImageLink>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 12 } lg={ 5 }>
                        <StylingImageLink to="/styling" compact={ isCompact }>
                            <ImageWrapper>
                                <StyledImg fluid={ data.stylingImage.childImageSharp.fluid } />
                                <Overlay />
                            </ImageWrapper>
                            <LinkText>Styling</LinkText>
                        </StylingImageLink>
                    </Col>
                </Row>
            </Grid>

        </Page>
    )
}

export default IndexPage

export const imagesQuery = graphql`{
    hairImage: file(relativePath: {eq: "hair-link-hover.jpg"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
    stylingImage: file(relativePath: {eq: "styling-link-hover.jpg"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}`
