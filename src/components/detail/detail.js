import React, { Fragment } from 'react'
import styled from 'styled-components'

const Name = styled.span(({ theme }) => `
    font-family: ${ theme.font.heading }; 
`)

const Value = styled.span``

export const Detail = ({ name, value }) => {
    return (
        <Fragment>
            <Name>{ name }</Name> &ndash; <Value>{ value }</Value>
        </Fragment>
    )
}
