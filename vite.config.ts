/// <reference types="vitest" />
import { unstable_vitePlugin as remix } from '@remix-run/dev'
import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [
    !process.env.VITEST && remix(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        plugins: [
          '@svgr/plugin-svgo',
          '@svgr/plugin-jsx',
          '@svgr/plugin-prettier',
        ],
        dimensions: false,
        typescript: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: { overrides: { removeViewBox: false } },
            },
            { name: 'removeDimensions' },
          ],
        },
      },
    }),
  ],
  test: {
    environment: 'happy-dom',
    // This is to load '.env.test' for vitest
    env: loadEnv('test', process.cwd(), ''),
    exclude: [...configDefaults.exclude, '**/build/**', '**/e2e/**'],
    watchExclude: [...configDefaults.watchExclude, '**/build/**', '**/e2e/**'],
    passWithNoTests: true,
  },
})
