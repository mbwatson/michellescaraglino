import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '../../theme'

export const HamburgerIcon = ({ size, fill, ...rest }) => {
    return (
        <svg { ...rest } fill={ fill } version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ `${ size }px` } height={ `${ size }px` } viewBox="0 0 24 24">
             <path d="m1 17.749h22v-2h-22zm0-5h22v-2h-22zm0-7v2h22v-2z" />
        </svg>
    )
}

HamburgerIcon.propTypes = {
    size: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
}

HamburgerIcon.defaultProps = {
    size: 16,
    fill: theme.color.primary,
}