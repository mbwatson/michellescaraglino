import React, { Fragment, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { CloseIcon, HamburgerIcon } from '../icons'
import { Link } from 'gatsby'

const Toggler = styled.button(({ theme }) => `
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2rem;
    height: 8rem;
    width: 8rem;
    cursor: pointer;
    padding: 0 2rem;
    z-index: 2;
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

const Drawer = styled.nav(({ theme }) => `
    position: fixed;
    top: 0;
    left: 100%;
    height: 100vh;
    width: 425px;
    z-index: 2;
    transition: transform 100ms ease-out;
    &.open {
        transform: translateX(-425px);
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
    padding-top: 10rem;
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
        } else {
            document.body.removeEventListener('keydown', handleKeyDown)
        }
    }, [open])

    return (
        <Fragment>
            <Drawer className={ open ? 'open' : null }>
                <Navigation>
                    <NavItem to="/hair" onClick={ handleClickLink }>Hair</NavItem>
                    <NavItem to="/styling" onClick={ handleClickLink }>Styling</NavItem>
                    <NavItem to="/contact" onClick={ handleClickLink }>Contact</NavItem>
                    <NavItem to="/" onClick={ handleClickLink }>Instagram</NavItem>
                </Navigation>
            </Drawer>
            <Toggler onClick={ handleToggle }>
                { open ? <CloseIcon fill={ theme.color.secondary } size={ 42 } /> : <HamburgerIcon fill={ theme.color.primary } size={ 36 }  /> }
            </Toggler>
        </Fragment>
    )
}
