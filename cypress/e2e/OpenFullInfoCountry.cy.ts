describe('Open full info about country', () => {
  // it('Clicks the star open form login', () => {
  // cy.visit('http://localhost:3000/').should('not.exist');
  //   cy.visit('http://localhost:3000');
  //   cy.get('svg[class="star-card"]').first().click();
  //   cy.get('div[class="container-sign-in"]');
  // });
  it('getting full information about the country', () => {
    cy.visit('http://localhost:3000');
    cy.get('div[class="container-country-card"]').first().click();
    cy.url().should('include', '/detailed-info');
    cy.get('div[class="container-info-country"]');
  });
  // it('User not valid', () => {
  //   cy.visit('http://localhost:3000');
  //   cy.get('div[class="login"]').click();
  //   cy.get('div[class="container-info-country"]');123

  // });
});
