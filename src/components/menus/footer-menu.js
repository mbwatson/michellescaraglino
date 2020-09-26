import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Link } from 'gatsby'
import { StarIcon } from '../icons'

const Wrapper = styled.nav(({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(min-width: 792px) {
        flex-direction: row;
    }
    a {
        text-decoration: none;
        font-weight: bold;
    }
    * {
        margin: ${ theme.spacing.extraSmall };
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
            <a href="https://www.instagram.com/michellescaraglinohair" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
        </Wrapper>
    )
}