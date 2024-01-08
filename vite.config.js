import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
    return {
        build: {
            rollupOptions: {
                input: [
                    'index.html',
                ],
                output: {
                    entryFileNames: '[name].js',
                }
            }
        }
    }
})