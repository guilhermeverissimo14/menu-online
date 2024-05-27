//feature
describe('Carrinho de compras', () => {
  //cenario
  describe("Abrindo modal do carrinho", () => {

    //given 
    it('Dado que estou na pagina de produtos', () => {
      cy.visit('/')
    })

    it('Devo clicar no modal', () => {
      cy.get('.view-cart-button').click();
    })

    it('Devo ver se o modal esta sendo exibido corretamente', () => {
      cy.get('.cart-modal').should('be.visible')
    })
   


  })

})