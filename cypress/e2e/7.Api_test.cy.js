describe('Validasi Dinamis dari API Reqres', () => {
    beforeEach(() => {
    cy.pause()
  })

  it('Ambil data user dan lakukan validasi berdasarkan nilai', () => {
    cy.request('https://reqres.in/api/users/2')
      .then((response) => {
      expect(response.status).to.eq(200)

      const user = response.body.data

      // Kondisi 1: Jika first_name adalah Janet
      if (user.first_name === 'Janet') {
        expect(user.email).to.eq('janet.weaver@reqres.in')
        cy.log('Nama Janet ditemukan dan email sesuai')
      }

      // Kondisi 2: Jika ID adalah 2
      if (user.id === 2) {
        expect(user.avatar).to.include('2-image.jpg')
        cy.log('ID 2 ditemukan, avatar valid')
      } else {
        // Kondisi 3: Jika ID bukan 2
        cy.log(`Unknown user ID: ${user.id}`)
        console.warn(`Unknown user ID: ${user.id}`)
      }
    })
  })
  

})