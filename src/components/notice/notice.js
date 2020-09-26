import React from 'react'
import styled from 'styled-components'
import { ThinStarIcon } from '../icons'

const Wrapper = styled.div(({ theme }) => `
    background-color: ${ theme.color.secondary };
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${ theme.spacing.medium };
`)

const Content = styled.div(({ theme }) => `
    vertical-align: middle;
    margin: 0 ${ theme.spacing.extraSmall };
    font-family: ${ theme.font.heading };
`)

export const Notice = ({ children, ...props }) => {
    return (
        <Wrapper { ...props }>
            <ThinStarIcon size={ 16 } />
            <Content>
                { children }
            </Content>
            <ThinStarIcon size={ 16 } />
        </Wrapper>
    )
}