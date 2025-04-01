Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('buscarProduto', (usuario, senha) => {
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

