describe('Latihan Drop Down, Radio button dan Text Area', () => {

  beforeEach(() => {
    cy.pause()
    cy.visit('https://example.cypress.io/commands/actions')
    cy.url().should('include', '/commands/actions')
  })

  it('Drop Down', () => {
    cy.get('.action-select')
    .select('oranges')
    .should('have.value','fr-oranges')
  })

  it('Radio Button', () => {
    cy.get('#optionsRadios1')
    .check()
    .should('be.checked')

    cy.get('#optionsRadios2')
    .check()
    .should('be.checked')
    
    cy.get('#optionsRadios1')
    .should('not.be.checked')
    
  })


  it('Text Area', () => {
    cy.get('.action-disabled')
    .type('ketik di text area disabled', {force:true})
    .should('have.value', 'ketik di text area disabled')
    
  })

   

  
})