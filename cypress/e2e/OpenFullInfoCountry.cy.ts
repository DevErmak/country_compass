describe('Open full info about country', () => {
  it('getting full information about the country', () => {
    cy.visit('http://localhost:3000');
    cy.get('div[class="container-country-card"]').first().click();
    cy.url().should('include', '/detailed-info');
    cy.get('div[class="container-info-country"]');
  });
});
