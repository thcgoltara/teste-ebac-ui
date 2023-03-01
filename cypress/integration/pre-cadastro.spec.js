/// <reference types="cypress" />
var faker = require('faker');

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    
});

describe('Funcionalidade Pré Cadastro', () => {

   it('Pre Cadastro com Sucesso', () => {
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type('@teste145@')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type('ThyThy')
    cy.get('#account_last_name').type('GolGol')
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    
   }); 


});
