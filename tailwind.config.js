/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#ffffff",     // defina a cor de fundo real da IR SOFTWARE aqui
                foreground: "#000000",     // defina se usar fg
                primary: "#1E40AF",        // exemplo
                secondary: "#9333EA",      // exemplo
                // adicione outras cores se quiser
            },
        },
    },
    plugins: [],
}
