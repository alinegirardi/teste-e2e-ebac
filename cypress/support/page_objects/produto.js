class ProdutosPage {

    buscarProduto(nomeProduto, tamanho, cor ){
        //ações do método
        
        
        cy.fixture('produtos').then(dados =>{
            cy.get('input[placeholder="Enter your search ..."]').eq(1).type(dados[0].nomeProduto)
            cy.get('.button-group >').eq(1).click()
            //cy.get('.button-variable-item-').click(dados [0].tamanho)
            //cy.get('.button-variable-item-').click(dados[0].cor)
            //cy.get('.input-text').clear().type(quantidade) 
        })

        }
}

export default new ProdutosPage()