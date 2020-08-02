import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Link } from 'gatsby'
import { StarIcon } from '../icons'

const Wrapper = styled.nav(({ theme }) => `
    a {
        text-decoration: none;
        font-weight: bold;
    }
    * {
        margin: 0 ${ theme.spacing.extraSmall };
        font-family: ${ theme.font.heading } !important;
    }
`)

export const FooterMenu = () => {
    const theme = useTheme()
    return (
        <Wrapper>
            <Link to="/hair">HAIR</Link>
            <StarIcon fill={ theme.color.primary } size={ 16 } />
            <Link to="/styling">STYLING</Link>
            <StarIcon fill={ theme.color.primary } size={ 16 } />
            <Link to="/contact">CONTACT</Link>
            <StarIcon fill={ theme.color.primary } size={ 16 } />
            <Link to="/">INSTAGRAM</Link>
        </Wrapper>
    )
}