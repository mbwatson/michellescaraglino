import React from 'react'
import logo from '../../images/michelle-scaraglino-logo.svg'

export const Brand = props => {
    return (
        <img { ...props } src={ logo } alt=""/>
    )
}
