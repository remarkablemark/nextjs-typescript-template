describe('Index', () => {
  it('renders the index page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // The new page should contain an h1 with "Welcome to Next.js!"
    cy.get('h1').contains('Welcome to Next.js!');
  });
});
