import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'

import { themeLight, themeDark } from '../styles/GlobalStyle'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeContainer = ({ children }) => {

    const { theme } = useContext(ThemeContext)


    return (
        <ThemeProvider theme={theme === 'light' ? themeLight : themeDark} >
            {children}
        </ThemeProvider>
    )
}

export default ThemeContainer