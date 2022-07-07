
describe('Generate password tests', () => {
    beforeEach(() => {
        cy.visit("https://davidwebjump.github.io/GeradorDeSenha/")
    });
    
    it("Teste Sucesso", () => {
        cy.get("#generate").click()
        cy.get("#result").should('not.have.text','\n                Clique em gerar Senha\n            ')
    });
});