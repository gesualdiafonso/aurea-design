export default {
    mode: 'jit',
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // Certifique-se de incluir a pasta `src`
    theme: {
        extend: {
            colors: {
            primary: "#004D40", // Verde Escuro
            secondary: "#00A88D", // Verde Menta
            dark: "#121212", // Preto Chumbo
            white: "#F2F9FF", // Branco-Neve
            mint: "#113912", // Verde Militar
            grayBack: "#3A3A3A", //Cianza Chumbo
            warning: "#DC4310",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                yantramanav: ["Yantramanav", "sans-serif"]
            }
        },
    },
    plugins: [],
};