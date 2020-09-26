import React from 'react'
import styled from 'styled-components'
import './style.css'
import { useWindowWidth } from '@react-hook/window-size'
import { Link } from 'gatsby'
import { Container } from './container'
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'
import { FooterMenu } from '../components/menus'
import { Brand } from '../components/brand'
import { Menu } from '../components/menus'
import { Notice } from '../components/notice'

const Wrapper = styled.div(({ theme }) => `
    background: ${ theme.color.white };
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    & ${ Main } {
        flex: 1;
    }
`)

export const DefaultLayout = ({ children }) => {
    const windowWidth = useWindowWidth()
    return (
        <Wrapper>
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
