describe('Upload File', () => {

  beforeEach(() => {
    cy.pause()
    
  })

  it('Upload File', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.url().should('include', '/upload')

    cy.get('#file-upload')
    .attachFile('sample.pdf')
    
    cy.get('#file-submit')
    .click()

    cy.get('h3')
    .should('contain','File Uploaded!')
    
    cy.get('#uploaded-files')
    .should('contain','sample.pdf')
  })

  it('Alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.url().should('include', '/javascript_alerts')

    cy.on('window:alert', (str) => {
    expect(str).to.equal('I am a JS Alert')
    })
    
    cy.contains('Click for JS Alert')
    .click()
   
    cy.get('#result')
    .should('contain', 'You successfully clicked an alert')
  })

  it('Confirm Oke', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.url().should('include', '/javascript_alerts')

   
    cy.on('window:confirm', (str) => {
    expect(str).to.equal('I am a JS Confirm')
    })

    cy.contains('Click for JS Confirm')
    .click()
       
    cy.get('#result')
    .should('contain', 'You clicked: Ok')

      })

  it('Confirm Cancel', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.url().should('include', '/javascript_alerts')

    cy.on('window:confirm', () => false) 

    cy.contains('Click for JS Confirm')
    .click()
       
    cy.get('#result')
    .should('contain', 'You clicked: Cancel')
  })

  it('Prompt', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.url().should('include', '/javascript_alerts')

    cy.window().then((win) => {
    cy.stub(win, 'prompt').returns('Cypress Project')
  })

    cy.contains('Click for JS Prompt')
    .click()
       
    cy.get('#result')
    .should('contain', 'You entered: Cypress Project')
  })
      
})