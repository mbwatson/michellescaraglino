import React, { Fragment, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { CloseIcon, HamburgerIcon } from '../icons'
import { Link } from 'gatsby'

const DRAWER_WIDTH = '450px'

const Toggler = styled.button(({ theme }) => `
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    right: 0;
    width: 4rem;
    cursor: pointer;
    padding: ${ theme.spacing.medium } 0 0 0;
    z-index: 3;
    background-color: transparent;
    outline: none;
    border: 0;
    & svg {
        transition: fill 250ms;
    }
    &:hover {
        & svg {
            fill: ${ theme.color.primaryLight };
        }
    }
`)

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    opacity: 0.0;
    transition: opacity 250ms;
    pointer-events: none;
    z-index: -1;
    &.active {
        z-index: 2;
        opacity: 0.5;
        pointer-events: auto;
    }
`

const Drawer = styled.nav(({ theme }) => `
    position: fixed;
    top: 0;
    left: 100%;
    height: 100vh;
    width: ${ DRAWER_WIDTH };
    max-width: 90%;
    z-index: 2;
    transition: transform 100ms ease-out;
    &.open {
        transform: translateX(-100%);
    }
`)

const Navigation = styled.nav(({ theme }) => `
    background-color: ${ theme.color.primary };
    width: 100%;
    height: 100vh;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding-top: calc(3 * ${ theme.spacing.extraLarge });
    margin: 0;
`)

const NavItem = styled(Link)(({ theme }) => `
    color: white;
    color: ${ theme.color.secondary };
    padding: ${ theme.spacing.medium } 2rem;
    text-transform: uppercase;
    font-size: 150%;
    font-family: ${ theme.font.heading };
    text-decoration: none;
`)

export const Menu = () => {
    const theme = useTheme()
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(open => !open)
    }

    const handleClickLink = () => setOpen(false)

    const handleKeyDown = event => {
        if (event.keyCode === 27) {
            event.preventDefault()
            setOpen(false)
        }
    }
    
    useEffect(() => {
        if (open) {
            document.body.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'auto'
        }
    }, [open])

    return (
        <Fragment>
            <Toggler onClick={ handleToggle }>
                { open ? <CloseIcon fill={ theme.color.secondary } size={ 36 } /> : <HamburgerIcon fill={ theme.color.primary } size={ 30 }  /> }
            </Toggler>
            <Overlay onClick={ handleToggle } className={ open ? 'active' : null }/>
            <Drawer className={ open ? 'open' : null }>
                <Navigation>
                    <NavItem to="/hair" onClick={ handleClickLink }>Hair</NavItem>
                    <NavItem to="/styling" onClick={ handleClickLink }>Styling</NavItem>
                    <NavItem to="/contact" onClick={ handleClickLink }>Contact</NavItem>
                    <NavItem as="a" href="https://www.instagram.com/michellescaraglinohair" onClick={ handleClickLink } target="_blank" rel="noopener noreferrer">Instagram</NavItem>
                </Navigation>
            </Drawer>
        </Fragment>
    )
}
