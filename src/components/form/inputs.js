import styled from 'styled-components'

const inputStyle = (({ theme }) => `
    flex: 1;
    padding: 0.5rem;
    outline: none;
    border-radius: 0;
    border-width: 1px;
    border-style: solid;
    border-color: ${ theme.color.primary };
    transition: boroder-color 250ms, filter 250ms;
    &:focus {
        border-color: var(--color-eggplant);
        filter: drop-shadow(0 0 0.1rem var(--color-eggplant));
    }
`)

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    & > label {
        padding: 0.5rem 0;
        font-weight: bold;
    }
`

export const TextInput = styled.input.attrs(props => ({ type: props.type }))`
    ${ inputStyle }
`

export const Select = styled.select`
    ${ inputStyle }
`

export const Option = styled.option``

export const TextArea = styled.textarea`
    resize: vertical;
    min-height: 250px;
    ${ inputStyle }
`

export const HelpText = styled.small`
    padding: 0.25rem 0;
    font-style: italic;
`
