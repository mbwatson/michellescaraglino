import styled from 'styled-components'

export const Button = styled.button(({ theme }) => `
    background-color: #fff;
    border-radius: 0;
    display: inline-block;
    font-size: 100%;
    font-family: ${ theme.font.heading };
    border: 1px solid ${ theme.color.primary };
    color: ${ theme.color.primary };
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none !important;
    white-space: nowrap;
    cursor: pointer;
    position: relative;
    transition: background-color 250ms;
    filter: brightness(1.0) opacity(1.0);
    &:hover, &:focus {
        background-color: ${ theme.color.secondary };
    }
    &:disabled {
        cursor: default;
    }
`)
