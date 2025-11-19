import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
    globalCss: {
        "html, body": {
            margin: 0,
            padding: 0,
        },
    },
    theme: {
        breakpoints: {
            sm: "320px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },
        tokens: {
            colors: {
                red: {
                    value: "#EE0F0F"
                },
                primary: {
                    value: "#75C5C1"
                },
                secondary: {
                    value: "#41245F"
                },
                grey: {
                    100: { value: "#F7F7F7" },
                    200: { value: "#292D32" },
                },
                borders: {
                    subtle: { value: "#CDD6E9" },
                    light: { value: "#EEF1F9" },
                },

                grayBg: {
                    value: "#F7F7F7"
                },
            },
            fonts: {
                body: { value: "var(--font-jakarta-sans), sans-serif" },
                heading: { value: "var(--font-jakarta-sans), sans-serif" },
            }
        },
        // semanticTokens: {
        //     colors: {
        //         danger: { value: "{colors.red}" },
        //         secondary: {
        //             value: "#41245F"
        //         },
        //         primary: {
        //             value: "colors.primary"
        //         },
        //     },
        // },
        keyframes: {
            spin: {
                from: { transform: "rotate(0deg)" },
                to: { transform: "rotate(360deg)" },
            },
        },
    },
})

export default createSystem(defaultConfig, config)