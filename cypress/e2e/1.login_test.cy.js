describe('Test Login Sederhana', () => {
  it('Harus bisa mengisi email', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('#email1')
      .type('testing@qa.com')
      .should('have.value', 'testing@qa.com')
  })
})