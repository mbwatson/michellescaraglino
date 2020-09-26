import styled from 'styled-components'

export const Title = styled.h1(({ theme, center }) =>`
    font-family: Ringside;
    text-transform: uppercase;
    -webkit-text-stroke: 1px ${ theme.color.primary };
    -webkit-text-fill-color: ${ theme.color.white };
    paint-order: stroke fill;
    text-align: center;
    @media (min-width: 768px) {
        text-align: ${ center ? 'center' : 'left' };
    }
`)