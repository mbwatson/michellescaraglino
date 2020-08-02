import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '../../theme'

export const ThinStarIcon = ({ size, fill, ...rest }) => {
    return (
        <svg { ...rest } fill={ fill } version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ `${ size }px` } height={ `${ size }px` } viewBox="0 0 24 24">
          <path class="st0" d="m11.623 24h0.77002v-11.033l7.8044 7.8044 0.55706-0.55706-7.8211-7.8211h11.067v-0.77003h-11.084l7.8379-7.8379-0.53939-0.53939-7.8211 7.8211v-11.067h-0.77002v11.084l-7.8379-7.8379-0.55706 0.55706 7.8211 7.8211h-11.05v0.77003h11.067l-7.8211 7.8211 0.53939 0.53939 7.8379-7.8379z" stroke-width=".092998"/>
        </svg>
    )
}

ThinStarIcon.propTypes = {
    size: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
}

ThinStarIcon.defaultProps = {
    size: 16,
    fill: theme.color.primary,
}