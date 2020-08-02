import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DefaultLayout } from './src/layout'
import { theme } from './src/theme'

export const wrapPageElement = ({ element }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return (
        <ThemeProvider theme={ theme }>
            <DefaultLayout>
                { element }
            </DefaultLayout>
        </ThemeProvider>
    )
}