describe('Array Table', () => {

  beforeEach(() => {
    cy.pause()
    cy.visit('https://testpages.herokuapp.com/styled/tag/table.html')
    cy.url().should('include', '/table.html')
  })

  it('Mengubah isi tabel menjadi array of object', () => {
  const dataTabel = []
  
  cy.get('#mytable tbody tr').each($row => {
        const kolom = Cypress.$($row).find('td')
        const name = kolom.eq(0).text().trim()
        const amount = kolom.eq(1).text().trim()

        dataTabel.push({ name, amount })
    })
    .then(() => {
      // Tampilkan hasil array ke console
      cy.log('Data tabel:', JSON.stringify(dataTabel))
      console.table(dataTabel)
    })

    })

    it('Mencari nilai terbesar dalam suatu tabel', () => {
  const dataTabel = []

  cy.get('#mytable tbody tr').each($row => {
    const kolom = Cypress.$($row).find('td')
    const name = kolom.eq(0).text().trim()
    const rawAmount = kolom.eq(1).text().trim()

    // Tambahkan log di sini
    console.log(`DEBUG: name="${name}", rawAmount="${rawAmount}"`)

    const amount = parseFloat(rawAmount)

    if (!isNaN(amount)) {
      dataTabel.push({ name, amount })
    }
    })
    .then(() => {
    console.log('DATA TABEL FINAL:', dataTabel)

    const maxData = dataTabel.reduce((prev, current) => {
      return current.amount > prev.amount ? current : prev
    })

    cy.log(`Amount tertinggi dimiliki oleh: ${maxData.name} (${maxData.amount})`)
    })
   })
      

  })