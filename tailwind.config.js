/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                heading: '#1678F2',
                second: '#6C87AE',
                dark: '#031432',
            },
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            sora: ['Sora', 'sans-serif'],
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                md: '3rem',
                lg: '4rem',
                xl: '5rem',
            },
        },
    },
    plugins: [],
};
