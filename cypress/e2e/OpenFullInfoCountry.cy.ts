describe('Open full info about country', () => {
  it('The page with full information should not open', () => {
    cy.visit('http://localhost:3000/full-info-country').should('not.exist');
  });
  // it('Clicks the star open form login', () => {
  //   cy.visit('http://localhost:3000');
  //   cy.get('svg[class="star-card"]').first().click();
  //   cy.get('div[class="container-sign-in"]');
  // });
  // it('Clicks the card open page fullinfo', () => {
  //   cy.visit('http://localhost:3000');
  //   cy.get('div[class="container-country-card"]').each((item) => {
  //     item.click();
  //   });
  //   cy.get('div[class="container-info-country"]');
  // });
  // it('User not valid', () => {
  //   cy.visit('http://localhost:3000');
  //   cy.get('div[class="login"]').click();
  //   cy.get('div[class="container-info-country"]');
  // });
});
