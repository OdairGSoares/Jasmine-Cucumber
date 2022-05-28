const Cliente = require("../../models/cliente.js")

describe('Clientes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Ao acessar a home, deve conter uma lista com 10 clientes', () => {
        cy.get('tbody tr').should('to.have.length', 10)
    });

})
