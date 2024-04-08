import {defineConfig} from "@pandacss/dev";

export default defineConfig({
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
    exclude: [],
    jsxFramework: 'solid',
    outdir: './src/@panda',
    theme: {
        extend: {
            tokens: {
                fonts: {
                    title: {value: 'PT Mono, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'},
                    body: {value: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'}
                }
            }
        },
    },
});
