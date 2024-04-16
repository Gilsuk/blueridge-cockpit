import { defineConfig } from "vite";

// eslint-disable-next-line no-unused-vars
export default defineConfig(({ command, mode }) => {
    return {
        worker: {
            rollupOptions: {
                output: {
                    entryFileNames: () => "[name]-[hash].js",
                },
            },
        },
        test: {
            environment: 'jsdom',
            restoreMocks: true,
            setupFiles: ['./vitest-setup.js'],
        },
    }
})