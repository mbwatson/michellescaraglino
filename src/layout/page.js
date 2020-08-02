import React from 'react'
import { animated, useSpring } from 'react-spring'

export const Page = ({ children }) => {
    const animation = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (
        <animated.div style={ animation }>
            { children }
        </animated.div>
    )
}
