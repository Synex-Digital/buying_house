/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                ru: "'Rubik', sans-serif",
            },
            spacing: {
                container: "1230px",
            },
            colors: {
                primary: "#c3002f",
                // Secondary: "#FB2576",
                textcolor: "#262626",
                ptagcolor: "#555c63",
            },
        },
    },
    plugins: [],
};
