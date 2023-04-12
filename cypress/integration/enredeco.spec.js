/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereço - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
        cy.login(dados.perfil, dados.senha)
        })
        
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Alice', 'Oliveira', 'BV', 'Brasil', 'Vista do Limoeiro', '13', 'Vix', 'Espírito Santo', '29890000', '279998556', 'alice@hotmail.com')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco [1].nome,
            dadosEndereco [1].Sobrenome,
            dadosEndereco [1].empresa,
            dadosEndereco [1].pais,
            dadosEndereco [1].endereco,
            dadosEndereco [1].numero,
            dadosEndereco [1].cidade,
            dadosEndereco [1].estado,
            dadosEndereco [1].cep,
            dadosEndereco [1].telefone,
            dadosEndereco [1].email,
            )
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    });

});