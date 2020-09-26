import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, useTheme } from 'styled-components'
import { StarIcon } from '../icons'

const throb = keyframes`
    0% {
        opacity: 0;
        transform: scale(1) rotate(180deg);
    }
    33.6% {
        transform: scale(1.3) rotate(180deg);
    }
    42.2% {
        transform: scale(0.4) rotate(180deg);
    }
    50% {
        opacity: 1;
        transform: scale(1.5) rotate(90deg);
    }
    100% {
        opacity: 0;
        transform: scale(1) rotate(0deg);
    }
`

const glow = keyframes`
    0% {
        opacity: 0.4;
    }
    50% {
        opacity: 1.0;
    }
    100% {
        opacity: 0.4;
    }
`

const Wrapper = styled.div`
    // & * {border: 1px solid #f99;}
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Tray = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const StarContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${ throb } 1500ms ease-out infinite;
    transform-origin: center center;
`

const LoadingText = styled.div`
    text-align: center;
    color: ${ props => props.color || '#333' };
    opacity: 0.75;
    animation: ${ glow } 1500ms ease-out infinite;
    padding: 0.5rem;
`

export const StarLoader = ({ text = "", textPlacement, color }) => {
    const theme = useTheme()
    return (
        <Wrapper>
            { text !== '' && textPlacement ==='top' && <LoadingText color={ color }>{ text }</LoadingText> }
            <Tray>
                <StarContainer>
                    <StarIcon size={ 24 } fill={ theme.color.primary } />
                </StarContainer>
            </Tray>
            { text !== '' && textPlacement ==='bottom' && <LoadingText color={ color }>{ text }</LoadingText> }
        </Wrapper>
    )
}

StarLoader.propTypes = {
    text: PropTypes.string,
    textPlacement: PropTypes.oneOf(['top', 'bottom']),
    color: PropTypes.string,
}
