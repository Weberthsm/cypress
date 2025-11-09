describe('Login', () => {
    it('Deve realizar login com credenciais válidas', () =>{
       cy.visit('http://localhost:4000');
       cy.get('input#username').click().type('julio.lima');
       cy.get('input#senha').click().type('123456');
       cy.contains('button', 'Entrar').click();

       cy.contains('h4','Realizar Transferência').should('be.visible');

    })
})

