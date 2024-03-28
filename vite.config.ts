/// <reference types="vitest" />
import { vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
// eslint-disable-next-line import/no-extraneous-dependencies
import Unfonts from 'unplugin-fonts/vite'
import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults } from 'vitest/config'

installGlobals()

export default defineConfig({
  plugins: [
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
    Unfonts({
      custom: {
        families: [
          {
            name: 'Instrument Sans',
            local: 'Instrument Sans',
            src: '/public/fonts/InstrumentSans*.ttf',
          },
        ],
        display: 'auto',
        preload: true,
        prefetch: false,
        injectTo: 'head-prepend',
      },
    }),
    !process.env.VITEST && remix(),
    tsconfigPaths(),
  ],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
    css: { include: [/.+/] },
    environment: 'happy-dom',
    // This is to load '.env.test' for vitest
    env: loadEnv('test', process.cwd(), ''),
    exclude: [...configDefaults.exclude, '**/build/**', '**/e2e/**'],
    globals: true,
    include: ['./app/**/*.test.?(c|m)[jt]s?(x)'],
    setupFiles: ['./test/setup-test-env.ts'],
    watchExclude: [...configDefaults.watchExclude, '**/build/**', '**/e2e/**'],
    passWithNoTests: true,
  },
})
