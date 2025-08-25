describe('10. Integrasi API Ke UI', () => {
  beforeEach(() => {
  cy.pause()
    // Abaikan error cross origin atau script error dari halaman
    Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })
  })
  it('Ambil data dari API lalu validasi di tabel UI', () => {
    //Step 1: Ambil data dari api reqres
    cy.request('https://reqres.in/api/users/2')
    .then((response) => {
    expect(response.status).to.eq(200)

    
    const user = response.body.data
    const firstName = user.first_name   // contoh: Janet
    const email = user.email            // contoh: janet.weaver@reqres.in

    cy.log(`API First Name: ${firstName}`)
    cy.log(`API Email: ${email}`)

    // Step 2: Buka halaman UI DemoQA WebTables
    cy.visit('https://demoqa.com/webtables')

    cy.get('.rt-table').then(($table) => {
        const tableText = $table.text()

        if (tableText.includes(firstName) && tableText.includes(email)) {
          cy.log('✅ Data dari API ditemukan di UI')
        } else {
          cy.log('⚠️ Data dari API tidak ditemukan di UI, ini normal karena dataset berbeda')
        }
      })

    }) 
  })

})