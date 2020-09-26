import styled from 'styled-components'

export const Paragraph = styled.p(({ theme, center }) =>`
    font-family: ${ theme.font.paragraph};
    text-align: ${ center ? 'center' : 'left' };
`)