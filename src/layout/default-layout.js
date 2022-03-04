import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './style.css'
import { useWindowWidth } from '@react-hook/window-size'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { Container } from './container'
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'
import { FooterMenu } from '../components/menus'
import { Brand } from '../components/brand'
import { Menu } from '../components/menus'
import { Notice } from '../components/notice'

const Wrapper = styled.div(({ theme, border }) => `
    background: ${ theme.color.white };
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    & ${ Main } {
        flex: 1;
    }
    ${ border ? `border: 1rem solid crimson;` : undefined }
`)

export const DefaultLayout = ({ children }) => {
    const { hostname } = useLocation()
    const windowWidth = useWindowWidth()
    const [border, setBorder] = useState()

    useEffect(() => {
        if (hostname.startsWith('dev.')) {
            console.log('dev')
            setBorder(true)
        } else {
            console.log('not dev')
            setBorder(false)
        }
    }, [])


    return (
        <Wrapper border={ border }>
            <Notice style={{ fontWeight: '700' }}>
                <Link to="/covid-19" style={{ textDecoration: 'none' }}>COVID-19 Updates</Link>
            </Notice>
            <Header>
                <Container style={{
                    padding: '0 1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                }}>
                    <Link to="/" style={{ width: '100%', zIndex: 1 }}>
                        <Brand style={{ width: '900px', display: 'block', margin: 'auto', padding: windowWidth < 1200 ? '0 4rem 0 0' : '0' }} />
                    </Link>
                    <Menu />
                </Container>
            </Header>
            <Main>
                <Container>
                    { children }
                </Container>
            </Main>
            <Footer>
                <Container>
                    <FooterMenu compact={ windowWidth < 792 } />
                    <br/>
                    <small>&copy; MICHELLE SCARAGLINO { new Date().getFullYear() }</small>
                </Container>
            </Footer>
        </Wrapper>
    )
}
