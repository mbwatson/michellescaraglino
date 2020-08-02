import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export const Brand = props => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "michelle-scaraglino-logo.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return <Img fluid={ data.placeholderImage.childImageSharp.fluid } { ...props } />
}
