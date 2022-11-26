import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

When('I visit {string}', (url: string) => {
  cy.visit(url);
});

// https://github.com/cucumber/cucumber-expressions
Then('I see heading {string}', (text: string) => {
  cy.findByRole('heading', {
    name: 'Welcome to Next.js!',
  }).should('exist');
});

Then('I see text {string}', (text: string) => {
  cy.findByText(text).should('exist');
});
