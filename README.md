# Ucase player

* Ucase nuxt player is a development of Ucase team [ucase-io](https://github.com/ucase-io)

[![NPM](https://img.shields.io/npm/l/@khusainovrm/nuxt-plyr)](https://github.com/ucase-io/nuxt-plyr/blob/master/LICENSE)

## Setup

### 1- Install Ucase player module

```bash
npm install @khusainovrm/nuxt-player
```
or
```bash
yarn add @khusainovrm/nuxt-player
```

### 2- Load `@khusainovrm/nuxt-player` module

```js
// nuxt.config.js

export default {
  modules: [
    ['@khusainovrm/nuxt-player', { namespace: 'UcasePlayer', defaultUrl: "someUrl" }],
  ],
  UcasePlayer: { option2: 'something else' },
}
```

## Usage

You have a successfully enabled UcasePlayer in your project. In a Vue component or page use `<UcasePlayer />`.

```vue
// ~/page/index.vue

<template>
  <div>
      <UcasePlayer src="yourLink" />
  </div>
</template>
```
## Module options

Options provided to module in nuxt.config.js:

| Name           | Description             | Default / Required                 |
| -------------- | ----------------------- | ---------------------------------- |
| `defaultUrl `  | String url of a video   | String/ Not required               |

## Component options

Options that can be passed in a UcasePlayer component:

| Name    | Description             | Default / Fallback                         |
| ------- | ----------------------- | ------------------------------------------ |
| `src `  | String url of a video   | 'https://player.vimeo.com/video/311756540' |
