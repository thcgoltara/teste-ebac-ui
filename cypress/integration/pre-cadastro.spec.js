/// <reference types="cypress" />
var faker = require('faker');

beforeEach(() => {
    cy.visit('minha-conta')

});

describe('Funcionalidade Pré Cadastro', () => {

    it('Pre Cadastro com Sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('@teste145@')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)


        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('!teste@teste')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('ThyThy')
        cy.get('#account_last_name').type('GolGol')
        cy.get('.woocommerce-Button').click()

    })
                    
})
   

     






