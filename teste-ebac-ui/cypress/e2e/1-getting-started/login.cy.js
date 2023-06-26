///<reference types="cypress" />
const perfil =require('../../fixtures/perfil.json')

context('Funcionalidade login',() =>{

  beforeEach(() => {
    cy.visit('minha-conta')
  });
  
  afterEach(() => {
     cy.screenshot()

  });
  

  it('Deve fazer login com sucesso' , () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')

  })

  it('Deve fazer login com Sucesso - Usando arquivos de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')
  });

  it.only('Deve fazer login com sucesso - Usando Fixture', () => {
    cy.fixture('perfil').then(dados => {
    cy.get('#username').type(dados.usuario)
    cy.get('#password').type(dados.senha, {log: false})
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')
    
    })
    
  });
  
  it('deve exibir uma mensagem de erro ao inserir usuario inválidos', () =>{
    cy.get('#username').type('@test.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain' , 'Erro: o usuário @test.com não está cadastrado neste site.')
  })

  it('deve exibir uma mensagem de erro ao inserir senha inválidos', () =>{
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('tesste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com')
  })
})    


