import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()


const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')
    const value = { theme, setTheme }

    useEffect(() => {


    }, [])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider