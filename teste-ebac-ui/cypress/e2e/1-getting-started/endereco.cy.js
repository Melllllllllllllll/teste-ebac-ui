///<reference types="cypress" />
import EnderecoPage from '../../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
        cy.login(dados.usuario, dados.senha)
       
          })  
    });
    
    it.only('Deve fazer cadastro de faturamento com sucesso ', () => {
        EnderecoPage.editarEnderecoFaturamento('Ana', 'vieira', 'ebac', 'Brasil', 'Rua.Pedro', '4500', 'São Paulo', 'São Paulo', '69982554', '85456986549', 'teste@ebac.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});