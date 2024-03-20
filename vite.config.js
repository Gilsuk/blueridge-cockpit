import { defineConfig } from "vite";

// eslint-disable-next-line no-unused-vars
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
        },
        test: {
            environment: 'jsdom',
            restoreMocks: true,
            setupFiles: ['./vitest-setup.js']
        }
    }
})