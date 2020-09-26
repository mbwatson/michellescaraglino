import styled from 'styled-components'

export const Header = styled.header(({ theme }) => `
    min-height: 6rem;
    padding: ${ theme.spacing.medium };
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`)