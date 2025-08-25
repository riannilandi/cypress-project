describe('Interaksi Dengan Tabel', () => {

  beforeEach(() => {
    cy.pause()
    cy.visit('https://testpages.herokuapp.com/styled/tag/table.html')
    cy.url().should('include', '/table.html')
  })

  it('Validasi nilai Aleister di dalam tabel', () => {
  let ditemukan = 0
  cy.get('#mytable tbody tr').each($row => {
        const name = Cypress.$($row).find('td').eq(0).text().trim()
        const amount = Cypress.$($row).find('td').eq(1).text().trim()

        if (name === 'Aleister' && amount === '33.3') {
         ditemukan += 1
        }
    })
    .then(() => {
      expect(ditemukan, 'Harus ada tepat 1 data').to.eq(1) 
    })

      
    })
      

  })