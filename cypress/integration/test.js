describe('My First Test', function() {
  beforeEach(() => {
    cy.fixture("selector").as("selector");
  });
    it('finds the content "Log in"', function() {
      cy.visit('https://staging.airwallex.com/en-AU/')
  
      cy.contains('Log in').click()
      cy.url().should('include', '/app/login')
      cy.get('input[name=email]').type(this.selector.email)
      cy.get('input[name=password]').type(this.selector.password)
      cy.get('button[type=submit]').click()
      cy.url().should('include', '/app/dashboard')

      cy.get('a[title=Payments]').click()
      
    })
  })