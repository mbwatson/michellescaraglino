import styled from 'styled-components'

export const Footer = styled.footer(({ theme }) => `
    background-color: transparent;
    padding: ${ theme.spacing.extraLarge };
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`)