# vuetify-Storybook

A repository example of Vuetify 2.x configured with Storybook. Thanks to [this github answer](https://github.com/storybookjs/storybook/issues/7593#issuecomment-548146120), it works.

Reproduction steps:

1. Create your project with `vue create .`
2. Add story book with `npx -p @storybook/cli sb init --type vue`
3. Add vuetify with `vue add vuetify`
4. Add vue storybook plugin with `vue add storybook`
4. Plug vuetify with storybook. Pay attention to `./storybook/preview.js` configuration and `vue.config.js`.
5. Make sure to run storybook with `vue-service-cli` and not as standalone to use `vue.config.js`

Checkout commit history for implementation details.

## Project setup
```
npm install
```

### Run storybook

```
npm run storybook
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```
