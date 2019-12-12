module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    "ecmaFeatures": {
      "legacyDecorators": true
    },
    parser: "@typescript-eslint/parser"
    //parser: ['@typescript-eslint/parser','babel-eslint','typescript-eslint-parser'],
    // parser: ['@typescript-eslint/parser']
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',//eslint 和 prettier 有可能冲突 那么用 prettier
    'plugin:vue-libs/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: ['@typescript-eslint', 'prettier'],

  // add your custom rules here
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    // 不检查申明但没使用的变量
    // 'no-unused-vars': 'off',
    // js代码 必须用分号结束
    semi: ['error', 'always'],
    // 数组和对象键值对最后一个逗号，
    // never参数：不能带末尾的逗号,
    // always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    // 'comma-dangle': [2, 'always-multiline'],
    // 禁用var，用let和const代替
    "no-var": "error",
    // 强制驼峰法命名
    "camelcase": 'off',
    //禁止console
    "no-console": "off",
    //禁止不必要的bool转换
    'no-extra-boolean-cast': 2,
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off",
    "vue/no-reserved-keys": "off",
    "vue/prop-name-casing": "off",
    "vue/no-v-html": "off",
    'no-unused-vars': 'off',
    'no-undef': 'off'

  }
}
