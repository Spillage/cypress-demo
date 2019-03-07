describe('My First Test', function() {
    it('finds the content "Log in"', function() {
      cy.visit('https://staging.airwallex.com/en-AU/')
  
      cy.contains('Log in').click()
    })
  })