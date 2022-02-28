const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            purple: colors.purple,
            pink: colors.pink,
            red: colors.red,
            orange: colors.orange,
            yellow: colors.yellow,
            green: colors.green,
            blue: {
                300: '#326C9C',
                400: '#245886',
                500: '#4090CA',
                600: '#296298',
                700: '#2B66A0',
                800: '#21527E'
            },
            indigo: colors.indigo
        },
        extend: {},
    },
    plugins: [],
}
