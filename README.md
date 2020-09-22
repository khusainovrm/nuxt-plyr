# nuxt-plyr

#how to install for testing
1) npm i @khusainovrm/nuxt-plyr

2) add in nuxt.config.js:
  modules: [
  // First way to pass options in {}
    ['@khusainovrm/nuxt-plyr', { namespace: 'plyr', options: 42 }],
  ],
  // Seconds way to pass options
  nuxtPlyr: { option2: 'something2' },

3) in a vue file, for exsample Random.vue, add component <result />


