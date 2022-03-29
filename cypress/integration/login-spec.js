///<reference types = "Cypress" />

describe('Login test', () => {

    it('Login with okta', () => {

        cy.loginByOktaApi();
        cy.visit(Cypress.env('baseUrl') + 'dashboard')
    })
})
