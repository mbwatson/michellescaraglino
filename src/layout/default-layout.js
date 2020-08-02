import React from 'react'
import styled from 'styled-components'
import './style.css'
import { Container } from './container'
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'
import { FooterMenu } from '../components/menus'
import { Brand } from '../components/brand'
import { Menu } from '../components/menus'

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
    return (
        <Wrapper>
            <Header>
                <Container>
                    <Brand style={{ maxWidth: '800px', margin: 'auto' }} />
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
                    <FooterMenu />
                    <br/>
                    <small>&copy; MICHELLE SCARAGLINO { new Date().getFullYear() }</small>
                </Container>
            </Footer>
        </Wrapper>
    )
}
