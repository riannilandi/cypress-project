describe('Login custom command', () => {

  beforeEach(() => {
    cy.pause()
    cy.fixture('users3').as('users')
 })

 it('login sukses',function() {
    cy.login(this.users.valid.username, this.users.valid.password)
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text','Products')
 } )

 it('login gagal',function() {
    cy.login(this.users.invalid.username, this.users.invalid.password)
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain.text','Epic sadface: Username and password do not match any user in this service')
 } )
 
 it('Login gagal dengan akun locked', function () {
    cy.login(this.users.locked.username, this.users.locked.password)
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
  })
})