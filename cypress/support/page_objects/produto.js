class ProdutosPage {

    buscarEAdicionarProdutos(){
       
        cy.fixture('produtos').then(produtos =>{
            produtos.forEach(produtos =>{
            cy.get('input[placeholder="Enter your search ..."]').eq(1).type(produtos.nomeProduto)
            cy.get('.button-group >').eq(1).click()
            cy.get('.button-variable-item-' + produtos.tamanho).click()
            cy.get('.button-variable-item-' + produtos.cor).click()
            cy.get('.input-text').clear().type(produtos.quantidade)
            cy.get('.single_add_to_cart_button').click()
            cy.contains('.woocommerce-message', produtos.nomeProduto).should('be.visible');
            });
        })        
    }  
}
export default new ProdutosPage();