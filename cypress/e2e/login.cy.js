describe('Login', () => {
    it('Login com dados válidos deve permitit entrada no sistema', () =>{
       cy.visit('http://localhost:4000');
       cy.get('input#username').click().type('julio.lima');
       cy.get('input#senha').click().type('123456');
       cy.contains('button', 'Entrar').click();

       cy.contains('h4','Realizar Transferência').should('be.visible');

    }),

     it('Login com dados inválidos não deve permitir entrada no sistema', () =>{
       cy.visit('http://localhost:4000');
       cy.get('input#username').click().type('julio.lima');
       cy.get('input#senha').click().type('654321');
       cy.contains('button', 'Entrar').click();
        
       cy.get('.toast').should('have.text','Erro no login. Tente novamente.')
 

    })
})

