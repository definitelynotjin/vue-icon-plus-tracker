// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import perfectionist from 'eslint-plugin-perfectionist'

// Flat config style
export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**',
      '**/cypress/**',
    ],
  },

  // ESLint core recommended
  eslint.configs.recommended,

  // TypeScript recommended
  ...tseslint.configs.recommended,

  // Vue recommended
  ...pluginVue.configs['flat/recommended'],

  // Your project rules
  {
    plugins: {
      perfectionist,
    },
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,      // let TS parse inside Vue <script lang="ts">
        project: './tsconfig.app.json',   // adjust to match your TS config
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
    rules: {
      // your tweaks
      'perfectionist/sort-named-imports': 'off',
      'space-before-function-paren': ['error', 'never'],
    },
  },

  // Prettier should always come last
  eslintConfigPrettier,
)
