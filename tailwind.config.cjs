/** @type {import('tailwindcss').config}*/
module.exports ={
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'white': '#FFF',
            'green': '#56F16B',
            'ash': '#F8FBFE',
            'grey': '#7C88A2',
            'dark': '#000'
        },
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
        },
        screens:{
            sm: '320px',
            md: '640px',
            xmd: '840px',
            lg:'1024',
            xl: '1280px',
            _2k: '2000px',
        },
    }
}