import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Blockquote = styled.blockquote`
    color: var(--color-black);
    margin: 0.5rem 0;
    transition: opacity 250ms;
    border-left: 0.25rem solid var(--color-grey-light);
    font-style: italic;
`

const Author = styled.div`
    text-align: right;
    padding-left: 10%;
    &::before {
        content: "- ";
    }
`

export const Quote = ({ quote, author }) => {
    return (
        <Fragment>
            <Blockquote>{ quote }</Blockquote>
            <Author>{ author }</Author>
            <br/>
        </Fragment>
    )
}

Quote.propTypes = {
    quote: PropTypes.node.isRequired,
    author: PropTypes.node.isRequired,
}

