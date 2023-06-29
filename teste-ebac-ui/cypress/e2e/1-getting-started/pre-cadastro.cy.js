///<reference types="cypress" />
 const { faker } = require('@faker-js/faker');

describe('Funcionalidade Pré cadastro com sucesso', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
       let nomeFaker = faker.name.firstName()
       let sobrenomeFaker = faker.name.fullName()
       let emailFaker = faker.internet.email(nomeFaker)



        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('marddif3ff236g5d45910')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });
    
         it('Deve complentar o pré-cadastro com sucesso usando comandos customizados', () => {
            let emailFaker2 = faker.internet.email()
            cy.preCadastro(emailFaker2, 'senhaforte!@', 'mell', 'carmo')
            cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
         });


    
});