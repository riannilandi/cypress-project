describe('Latihan Data Test dengan UI', () => {

  beforeEach(() => {
    cy.pause()
    cy.visit('https://practice.expandtesting.com/login')
    cy.url().should('include', '/login')
  })

  it('Login dengan akun yang valid', () => {
    cy.fixture('users2.json').then((users) => {
      const validUser = users.find(u => u.expected === 'success')

      cy.get('#username').type(validUser.username)
      cy.get('#password').type(validUser.password)
      cy.get('button[type="submit"]').click()

      // Validasi halaman sukses
      cy.url().should('include', '/secure')
      cy.get('#flash b').should('contain', 'You logged into a secure area!')
    })
  })

  it('Login dengan username salah', () => {
    cy.fixture('users2.json').then((users) => {
      const invalidUsers = users.find(u => u.expected === 'Invalidusername')
            
        cy.get('#username').clear().type(invalidUsers.username)
        cy.get('#password').clear().type(invalidUsers.password)
        cy.get('button[type="submit"]').click()

        cy.get('#flash b').should('contain', 'Your username is invalid!')
      })
    })

  it('Login dengan password salah', () => {
    cy.fixture('users2.json').then((users) => {
      const invalidUsers = users.find(u => u.expected === 'Invalidpassword')
            
        cy.get('#username').clear().type(invalidUsers.username)
        cy.get('#password').clear().type(invalidUsers.password)
        cy.get('button[type="submit"]').click()

        cy.get('#flash b').should('contain', 'Your password is invalid!')
      })
    })
  })
      
