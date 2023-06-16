///<reference types="cypress" />

context('Funcionalidade login',() =>{

  it('Deve fazer login com sucesso' , () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')

  })
  
  it('deve exibir uma mensagem de erro ao inserir usuario inválidos', () =>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('@test.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain' , 'Erro: o usuário @test.com não está cadastrado neste site.')
  })

  it('deve exibir uma mensagem de erro ao inserir senha inválidos', () =>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('tesste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com')
  })
})    


