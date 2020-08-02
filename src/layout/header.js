import styled from 'styled-components'

export const Header = styled.header(({ theme }) => `
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${ theme.spacing.small } ${ theme.spacing.large };
    position: relative;
`)