describe('Hello World Test', () => {

  const baseUrl = 'http://localhost:4200/'
  //Cypress.env('FRONTEND_URL')

  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/api1',
      response: {
        message: 'Dummy from cypress'
      }
    })
  })

  context('When page is opened', () => {
    it('Show สวัสดีชาวโลก', () => {
      cy.visit(baseUrl)
      cy.get('h1')
        .should(($item) => {
          expect($item).to.contain('Dummy from cypress')
        })
    })
  })

})
