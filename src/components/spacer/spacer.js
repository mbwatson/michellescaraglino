import React from 'react'
import styled from 'styled-components'
import { ThinStarIcon } from '../icons'

const Wrapper = styled.div(({ theme }) =>`
    text-align: center;
    margin: ${ theme.spacing.large } 0;
`)

export const Spacer = () => (
    <Wrapper>
        <ThinStarIcon size={ 32 } />
    </Wrapper>
)
