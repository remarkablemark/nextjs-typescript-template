import { When } from '@badeball/cypress-cucumber-preprocessor';

// https://github.com/cucumber/cucumber-expressions
When('I visit {string} without failing', (url: string) => {
  cy.visit(url, { failOnStatusCode: false });
});
