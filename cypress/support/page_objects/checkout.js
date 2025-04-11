class CheckoutPage{
    finalizarCompra(){
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#terms').check()
        cy.get('#place_order').click()
        cy.get('.page-title', {timeout:5000}).should('contain', 'Pedido recebido')
      }
}

export default new CheckoutPage();