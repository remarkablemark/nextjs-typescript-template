export {};

describe('Index', () => {
  it('renders the index page', () => {
    // Start from the index page
    cy.visit('/');

    // The new page should contain an h1 with "Welcome to Next.js!"
    cy.findByRole('heading', {
      level: 1,
      name: 'Welcome to Next.js!',
    }).should('exist');
  });
});
