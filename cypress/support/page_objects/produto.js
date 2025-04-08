class ProdutosPage {

    buscarProduto(){
        //ações do método
        
        cy.fixture('produtos').then(dados =>{
            cy.get('input[placeholder="Enter your search ..."]').eq(1).type(dados[0].nomeProduto)
            cy.get('.button-group >').eq(1).click()
            cy.get('.button-variable-item-' + dados[0].tamanho).click()
            cy.get('.button-variable-item-' + dados[0].cor).click()
            cy.get('.input-text').clear().type(dados[0].quantidade)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })
        
        cy.fixture('produtos').then(dados =>{
            cy.get('input[placeholder="Enter your search ..."]').eq(1).type(dados[1].nomeProduto)
            cy.get('.button-group >').eq(1).click()
            cy.get('.button-variable-item-' + dados[1].tamanho).click()
            cy.get('.button-variable-item-' + dados[1].cor).click()
            cy.get('.input-text').clear().type(dados[1].quantidade)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })

        cy.fixture('produtos').then(dados =>{
            cy.get('input[placeholder="Enter your search ..."]').eq(1).type(dados[2].nomeProduto)
            cy.get('.button-group >').eq(1).click()
            cy.get('.button-variable-item-' + dados[2].tamanho).click()
            cy.get('.button-variable-item-' + dados[2].cor).click()
            cy.get('.input-text').clear().type(dados[2].quantidade)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
        })

        cy.fixture('produtos').then(dados =>{
            cy.get('input[placeholder="Enter your search ..."]').eq(1).type(dados[3].nomeProduto)
            cy.get('.button-group >').eq(1).click()
            cy.get('.button-variable-item-' + dados[3].tamanho).click()
            cy.get('.button-variable-item-' + dados[3].cor).click()
            cy.get('.input-text').clear().type(dados[3].quantidade)
            cy.get('.single_add_to_cart_button').click()
            cy.contains('.woocommerce-message', dados[3].nomeProduto)
        })
    }
}

export default new ProdutosPage();