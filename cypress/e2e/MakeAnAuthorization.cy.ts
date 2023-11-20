describe('Make an authorization', () => {
  it('authorization by the "login" button', () => {
    cy.visit('http://localhost:3000');
    cy.get('div[class="login"]').click();
    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('div[class="sign-in"]');
    cy.get('input[class="input-login-sign-in"]').should('be.visible').type('test@test.test');
    cy.get('input[class="input-password-sign-in"]').should('be.visible').type('1Qweqwe');
    cy.get('button[type="submit"]').click();
    cy.get('div[class="logout"]');
  });
  it('authorization by the "login" button with error', () => {
    cy.visit('http://localhost:3000');
    cy.get('div[class="login"]').click();
    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('div[class="sign-in"]');
    cy.get('input[class="input-login-sign-in"]').should('be.visible').type('testqwe123@test.test');
    cy.get('input[class="input-password-sign-in"]').should('be.visible').type('weqwe');
    cy.get('button[type="submit"]').click();
    cy.get('div[class="Toastify"]').children();
  });
  it('authorization by the "register" button', () => {
    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    cy.visit('http://localhost:3000');
    cy.get('div[class="register"]').click();
    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('div[class="modal-register"]');
    cy.get('input[class="input-login-register"]').should('be.visible').type(`test${id}@test.test`);
    cy.get('input[class="input-password-register"]').should('be.visible').type('1Qweqwe');
    cy.get('input[class="input-confirm-password-register"]').should('be.visible').type('1Qweqwe');
    cy.get('button[type="submit"]').click();
  });
  it('authorization by the "register" button with error', () => {
    cy.visit('http://localhost:3000');
    cy.get('div[class="register"]').click();
    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('div[class="modal-register"]');
    cy.get('input[class="input-login-register"]').should('be.visible').type(`test@test.test`);
    cy.get('input[class="input-password-register"]').should('be.visible').type('1Qweqwe');
    cy.get('input[class="input-confirm-password-register"]').should('be.visible').type('1Qweqwe');
    cy.get('button[type="submit"]').click();
    cy.get('div[class="Toastify"]').children();
  });
  it('authorization by the "star" and set buffer country', () => {
    cy.visit('http://localhost:3000');
    cy.get('div[class="register"]');
    cy.get('div[class="favorite"]').should('not.exist');
    cy.get('div[class="container-country-card"]').eq(0).children('.no-favorite').children().click();
    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('div[class="sign-in"]');
    cy.get('input[class="input-login-sign-in"]').should('be.visible').type('testada@test.test');
    cy.get('input[class="input-password-sign-in"]').should('be.visible').type('1Qweqwe');
    cy.get('button[type="submit"]').click();
    cy.get('div[class="logout"]');
    cy.get('div[class="container-country-card"]').eq(0).children('.favorite');
  });
});
