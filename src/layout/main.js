import styled from 'styled-components'

export const Main = styled.main(({ theme }) => `
    background-color: transparent;
    padding: ${ theme.spacing.medium };
    @media (min-width: 768px) {
        padding: ${ theme.spacing.large };
    }
`)