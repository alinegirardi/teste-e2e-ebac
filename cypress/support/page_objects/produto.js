class ProdutosPage {

    buscarEAdicionarProdutos(){
       
        cy.fixture('produtos').then(produto =>{
            produto.forEach(produto =>{
            cy.get('input[placeholder="Enter your search ..."]').eq(1).type(produto.nomeProduto)
            cy.get('.button-group >').eq(1).click()
            cy.get('.button-variable-item-' + produto.tamanho).click()
            cy.get('.button-variable-item-' + produto.cor).click()
            cy.get('.input-text').clear().type(produto.quantidade)
            cy.get('.single_add_to_cart_button').click()
            cy.contains('.woocommerce-message', produto.nomeProduto).should('be.visible');
            });
        })        
    }  
}
export default new ProdutosPage();