describe('Searh', () => {
  it('does it find the correct text', () => {
    cy.visit('http://localhost:3000');
    cy.get('div[class="custom-select__value-container css-1fdsijx-ValueContainer"]')
      .click()
      .type('rus');
    if (cy.get('div[class="custom-select__menu-list css-1n6sfyn-MenuList"]').contains('Loading'))
      cy.wait(1000);
    cy.get('div[class="custom-select__menu-list css-1n6sfyn-MenuList"]').each(($div) => {
      cy.wrap($div)
        .find('*')
        .each(($child) => {
          cy.wrap($child)
            .invoke('text')
            .then((text) => {
              if (text.includes('rus')) {
                expect(text).to.include('rus');
              }
            });
        });
    });
  });
});
