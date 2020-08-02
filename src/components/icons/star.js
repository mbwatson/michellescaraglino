import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '../../theme'

export const StarIcon = ({ size, fill, ...rest }) => {
    return (
        <svg { ...rest } fill={ fill } version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ `${ size }px` } height={ `${ size }px` } viewBox="0 0 24 24">
          <path class="st0" d="m12.614-7.3242e-6h-1.2115v10.551l-7.4608-7.4608-0.19341 0.1934-0.67511 0.67511 7.4444 7.4444h-10.518v1.2115h10.534l-7.251 7.251-0.19341 0.1934 0.19341 0.19341 0.46436 0.46437 0.19341 0.1934 7.4608-7.4608v10.551h1.2115v-10.502l7.428 7.428 0.86851-0.86852-7.4444-7.4444h10.534v-1.2115h-10.551l7.2674-7.2674 0.19341-0.1934-0.19341-0.19341-0.46436-0.46437-0.19341-0.1934-7.4444 7.4444v-10.261z" stroke-width=".09123"/>
        </svg>
    )
}

StarIcon.propTypes = {
    size: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
}

StarIcon.defaultProps = {
    size: 16,
    fill: theme.color.primary,
}