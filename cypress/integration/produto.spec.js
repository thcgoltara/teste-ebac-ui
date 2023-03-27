/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve Selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.eq(5)
            .contains('Aero Daily Fitness Tee')
            .click()

    });

    it('Deve Adicionar um Produto ao Carrinho', () => {
        var quantidade = 10

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' “Abominable Hoodie” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho - Usando comando Customizado', () => {
       cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 2)
    });

    it.only('Deve adicionar produtos ao carrinho - Usando comando Customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'XS', 'Blue', 2)
     });
});