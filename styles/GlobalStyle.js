import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export const themeLight = {
    bgColor: '#fff',
    secondBgColor: 'rgba(0,0,0,0.1)',
    sidebarColor: 'rgba(0,0,0,0.05)',
    mainColor: '#32323d',
    activeColor: '#6B3483',
    secondTextColor: 'rgba(0,0,0,0.7)',
    hoverColor: '#9c32ca',
    borderColor: 'rgba(0,0,0,0.1)'
}

export const themeDark = {
    bgColor: '#1d375a',
    secondBgColor: 'rgba(255,255,255,0.1)',
    sidebarColor: 'rgba(255,255,255,0.05)',
    mainColor: '#fff',
    activeColor: '#DADADA',
    secondTextColor: 'rgba(255,255,255,0.5)',
    hoverColor: '#6e8ffb',
    borderColor: 'rgba(255,255,255,0.1)'
}