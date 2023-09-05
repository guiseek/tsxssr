import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxInject: `import { TSX } from '/src/core/tsx/factory'`,
    jsxDev: true,
  },
});
