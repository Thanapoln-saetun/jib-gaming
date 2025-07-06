import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                'xs': '475px',
            },
            colors: {
                primary: {
                    DEFAULT: '#221690',
                    dark: '#221692',
                },
                warning: {
                    DEFAULT: '#FDB022',
                },
                background: '#FFFFFF',
                white: '#FFFFFF',
            },
            fontFamily: {
                sans: ['Noto Sans Thai', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-in': 'slideIn 0.5s ease-out',
                'marquee-left': 'marqueeLeft 60s linear infinite',
                'marquee-right': 'marqueeRight 60s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                marqueeLeft: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marqueeRight: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                slideRight: {
                    '0%, 33.33%': { opacity: '1' },
                    '33.34%, 100%': { opacity: '0' },
                },
            },
            scale: {
                '25': '0.25',
                '30': '0.3',
                '35': '0.35',
            },
        },
    },
    plugins: [],
}
export default config 