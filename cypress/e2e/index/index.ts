import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

// https://github.com/cucumber/cucumber-expressions
When('I visit {string}', (url: string) => {
  cy.visit('/');
});

Then('I see heading {string}', (text: string) => {
  cy.findByRole('heading', {
    name: 'Welcome to Next.js!',
  }).should('exist');
});
