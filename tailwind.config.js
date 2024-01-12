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
        },
    },
    plugins: [],
};
