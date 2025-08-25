describe('Latihan Selector dan Assertion Lanjutan', () => {
  it('Input Email dan Checkbox', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.url().should('include', '/commands/actions')


    cy.get('#email1')
      .type('testing@qa.com')
      .should('have.value', 'testing@qa.com')

    cy.get('#fullName1')
      .should('have.attr', 'placeholder', 'Enter your name')

    cy.get('.action-checkboxes input[type="checkbox"]:not(:disabled)')
      .check()
      .should('be.checked')

      .pause() //untuk debug interaktif

    cy.get('.action-checkboxes input[type="checkbox"]:checked')
    .should('have.length', 2)

    cy.get('.btn-primary').eq(0)
    .should('exist')
    .and('be.visible')
    .and('contain','Submit')

    cy.get('.btn-primary').eq(0).click()

    cy.get('p').contains('Your form has been submitted!')
    .should('be.visible')
   

  })
})