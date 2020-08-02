import styled from 'styled-components'

export const Title = styled.h1(({ theme }) =>`
    font-family: Ringside;
    text-transform: uppercase;
    -webkit-text-stroke: 1px black;
    -webkit-text-fill-color: ${ theme.color.white };
`)