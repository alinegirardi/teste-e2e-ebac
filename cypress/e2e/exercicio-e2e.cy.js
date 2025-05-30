///<reference types="cypress"/>
import produtosPage from "../support/page_objects/produto"
import checkout from "../support/page_objects/checkout";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      cy.login('aline.teste@teste.com.br', "teste@123")
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aline.qa')
      produtosPage.buscarEAdicionarProdutos()
      checkout.finalizarCompra()
  });
  
})