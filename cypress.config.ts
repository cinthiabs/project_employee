import { defineConfig } from 'cypress'

export default defineConfig({
  port:4021,
  e2e: {
    baseUrl: 'http://localhost:4200',
    video:true,

  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    //specPattern: '**/*.cy.ts'
  }

})
