# nuxt-plyr

#how to install for testing
1) npm i @khusainovrm/nuxt-plyr

2) add in nuxt.config.js:
  modules: [
  // First way to pass options in {}
    ['@khusainovrm/nuxt-plyr', { namespace: 'Ucase plyr', myOptions: 'It is working' }]
  ],
  // Seconds way to pass options
  nuxtPlyr: { initialValue: 42}
