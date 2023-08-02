/// <reference types="Cypress" />

describe('Create user', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it('Should receive the error message if the user already exists', () => {
    cy.visit('https://sandbox.affirm-stage.com/');
    cy.contains('Sign in').realHover();
    cy.get('a[href="/user/signup"]').click();
    cy.get('input[type="tel"]').type('2257682322');
    cy.get('button[type="submit"]').click();
    cy.get('input[data-testid="phone-pin-field"]').type('123456');
    cy.get('[data-testid="first-name-field"]').type('Test');
    cy.get('[data-testid="last-name-field"]').type('Profile');
    cy.get('[data-testid="email-field"]').type('testprofile@gmail.com');
    cy.get('button[type="submit"]').click();
    cy.get('[data-testid="dob-field"]').type('02/12/2000');
    cy.get('[data-testid="last-four-ssn-field"]').type('7890');
    cy.get('button[type="submit"]').click();
    const signUpError = cy.get('[data-testid="sign-up-error"]');
    signUpError.should('have.text', 'There was an error with your signup. Your phone number may be invalid, or you may already have an account.')
  });
});
