# Ucase nuxt-plyr

* Ucase nuxt-plyr uses plyr by sampotts v3 for the players [plyr](https://github.com/sampotts/plyr)

## Setup

### 1- Install Ucase nuxt-plyr module

```bash
npm install @khusainovrm/nuxt-plyr
```

### 2- Load `@khusainovrm/nuxt-plyr` module

```js
// nuxt.config.js

export default {
  modules: [
    ['@khusainovrm/nuxt-plyr', { namespace: 'plyr', options: 42 }],
  ],

  nuxtPlyr: { option2: 'something2' },
}
```

## Usage

You have a successfully enabled UcasePlayer in your project. In a vue component or page use tag UcasePlayer.

```vue
// ~/page/index.vue

<template>
  <div>
      <UcasePlayer />
  </div>
</template>
```
## Options

Options that can be passed in a UcasePlayer component:

| Name    | Description             | Default / Fallback                 |
| ------- | ----------------------- | ---------------------------------- |
| `src `  | String url of a video   | String                             |
