/// <reference types="cypress" />

describe('Funcionalidade Endereço - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
        cy.login(dados.perfil, dados.senha)
        })
        
    });

    it('Deve fazer cadastro de faturamento válido', () => {
                //cadastro de endereço
    });
});