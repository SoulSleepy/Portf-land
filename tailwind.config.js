/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultConfig')

module.exports = {
    content: [
        "./helpers/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    important: true,
    theme: {
        ...defaultTheme,
        colors: {
            ...defaultTheme.colors,
            primaryD: '#1f1f39',
            primary: '#3B81F6',
            white: '#ffffff',
            darkD: '#1c1a33dc',
            modalBg: 'rgba(0, 0, 0, 0.55)',
            mapItemBG: 'rgba(0, 0, 0, 0.25)',
            transparent: 'transparent',
            lightRed: '#b0392c',
            graph: {
                DEFAULT: '#8884d8',
                upload: '#82ca9d'
            },
            text: {
                DEFAULT: '#1F2937',
                light: '#6C7281',
            },
            light: {
                DEFAULT: '#FAFBFC',
                lighter: '#F3F4F6',
                lighterD: '#18162bdc'
            },
        },
        extend: {
            boxShadow: {
                'dark': '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
            }
        },
    },
    plugins: [],
}

// '#FAFBFC'