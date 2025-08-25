describe('Latihan Functionality Login', () => {

  beforeEach(() => {
    cy.pause()
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.url().should('include', '/practice-test-login/')
  })

  it('Positive Login', () => {
     cy.get('#username')
    .type('student')
 
    cy.get('#password')
    .type('Password123')

    cy.get('#submit')
    .click()

    cy.get('.post-title')
    .should('contain', 'Logged In Successfully')
    .and('be.visible')
  })

  it('Negative Login Username Salah', () => {
     cy.get('#username')
    .type('teacher')
 
    cy.get('#password')
    .type('Password123')

    cy.get('#submit')
    .click()

    cy.get('#error')
    .should('contain', 'Your username is invalid!')
    .and('be.visible')
  })


  it('Negative Login Password Salah', () => {
     cy.get('#username')
    .type('student')
 
    cy.get('#password')
    .type('Passwordsalah123')

    cy.get('#submit')
    .click()

    cy.get('#error')
    .should('contain', 'Your password is invalid!')
    .and('be.visible')
  })


})