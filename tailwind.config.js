export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    default: "#A67C52",
                    dark: "#5C4033",
                    soft: "#C9B8A1",
                },
                neutral: {
                    background: "#F7F5F2",
                    backgroundAlt: "#EDE8E1",
                    text: "#2E3A45",
                    dark: "#1A242C",
                },
                accent: {
                    green: "#4A6741",
                    greenLight: "#B6C0B5"
                }
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                heading: ["Playfair Display", "serif"],
            }
        },
    },
    plugins: [],
}