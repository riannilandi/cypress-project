describe('Validasi Data Driven', () => {
    beforeEach(() => {
    cy.pause()
  })

  it('Cek semua user memiliki email valid dan password tidak kosong', () => {
    cy.fixture('users')
    .then((users) => {
        users.forEach((user) => {
            expect(user.email).to.include('@')
            expect(user.password).to.not.be.empty
        cy.log(`Testing user: ${user.email}`)
  })
  })
  

})

})