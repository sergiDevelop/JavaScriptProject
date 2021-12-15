import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
const loginPage = require('../../pages/homePage')

Given('I open Google page', () => {
  cy.visit(loginPage.url)
})
Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
  })