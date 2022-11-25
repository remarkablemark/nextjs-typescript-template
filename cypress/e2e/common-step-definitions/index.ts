import { Then } from '@badeball/cypress-cucumber-preprocessor';

// https://github.com/cucumber/cucumber-expressions
Then('I see heading {string}', (text: string) => {
  cy.findByRole('heading', {
    name: 'Welcome to Next.js!',
  }).should('exist');
});

Then('I see text {string}', (text: string) => {
  cy.findByText(text).should('exist');
});
