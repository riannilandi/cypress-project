describe('Sorting Amount dari Terkecil ke Terbesar', () => {

  beforeEach(() => {
    cy.pause()
    cy.visit('https://testpages.herokuapp.com/styled/tag/table.html')
    cy.url().should('include', '/table.html')
  })

  it('Urutkan data tabel berdasarkan amount secara ascending', () => {
    const dataTabel = []

    cy.get('#mytable tbody tr').each($row => {
      const kolom = Cypress.$($row).find('td')
      const name = kolom.eq(0).text().trim()
      const rawAmount = kolom.eq(1).text().trim()
      const amount = parseFloat(rawAmount)

      if (!isNaN(amount)) {
        dataTabel.push({ name, amount })
      }
    })
    .then(() => {
      // Urutkan secara ascending
      const sorted = [...dataTabel].sort((a, b) => a.amount - b.amount)

      console.log('=== DATA TERURUT ASCENDING ===')
      console.table(sorted)

      // Validasi: pastikan data urut dari kecil ke besar
      for (let i = 1; i < sorted.length; i++) {
        expect(sorted[i].amount).to.be.at.least(sorted[i - 1].amount)
      }
    })
  })

  it('Filter data nilai diatas 30', () => {
    const dataTabel = []

    cy.get('#mytable tbody tr').each($row => {
      const kolom = Cypress.$($row).find('td')
      const name = kolom.eq(0).text().trim()
      const rawAmount = kolom.eq(1).text().trim()
      const amount = parseFloat(rawAmount)

      if (!isNaN(amount)) {
        dataTabel.push({ name, amount })
      }
    })
    .then(() => {
      // Filter: ambil data yang amount > 30
      const filtered = dataTabel.filter(row => row.amount > 30)

      console.log('=== DATA YANG DITEMUKAN (amount > 30) ===')
      console.table(filtered)

    // Validasi: harus ada setidaknya 1 data dengan amount > 30
    expect(filtered.length, `Jumlah data amount > 30 (${filtered.length}) harus lebih dari 0`).to.be.above(0)

    // Validasi per data (opsional)
    filtered.forEach(item => {
      expect(item.amount, `${item.name} harus > 30`).to.be.above(30)
    })

    // Log info
    cy.log(`Jumlah data dengan amount > 30: ${filtered.length}`)

    })
    })
  })
