/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            spacing: {
                4.5: "1.125rem", // 18px
                5.5: "1.375rem", // 22px
                6.5: "1.625rem", // 26px
                7.5: "1.875rem", // 30px
                8.5: "2.125rem", // 34px
                9.5: "2.375rem", // 38px
                12.5: "3.125rem", // 50px
                15: "3.750rem", // 60px
                22: "5.50rem", // 88px
                25: "6.250rem", // 100px
                50: "12.50rem", // 200px
            },
            borderWidth: {
                3: "0.1875rem", // 3px
            },
            borderRadius: {
                10: "0.625rem", // 10px
            },
            fontSize: {
                10: "0.625rem",
                13: "0.8125rem",
                15: "0.9375rem",
                22: "1.375rem",
                26: "1.625rem",
                28: "1.750rem",
                32: "2.0rem",
                34: "2.125rem",
                40: "2.500rem",
                45: "2.8125rem",
                54: "3.375rem",
                78: "4.875rem",
                84: "5.250rem",
            },
            colors: {
                orange: "#FF6731",
                darkorange: "#D1562A",
                green: "#84F3DD",
                lightgreen: "#59FEDE",
                darkgreen: "#00C4A7",
                gray: "#4A4A4A",
                lightgray: "#DDDDDD",
                darkgray: "#2A2A2A",
                pink: "#FB55B0",
                purple: "#8430D6",
                blue: "#43BFE5",
                gold: "#F7C366",
                silver: "#9D9594",
                bronze: "#F99261",
            },
        },
    },
    plugins: [],
};
