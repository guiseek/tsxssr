import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsx: 'transform',
    jsxInject: `import { TSX } from '/src/core/tsx/factory'`,
    jsxFactory: 'TSX.factory',
    jsxFragment: 'TSX.fragment',
  },
});
