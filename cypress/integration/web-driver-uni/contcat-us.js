/// <reference types = "cypress"/>

describe("Test contact us page via WebdriverUni", () => {
    it("Should be able to submit a successful submission via Contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click()  
        cy.get('[name="first_name"]').type("Cypress")
        cy.get('[name="last_name"]').type("Test")
        cy.get('[name="email"]').type("saitarunbv@gamil.com")
        cy.get('textarea.feedback-input').type("This is a test")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    
    })

    it.only("Should not be able to submit a successful submission via Contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click()  
        cy.get('[name="first_name"]').type("Cypress")
        cy.get('[name="last_name"]').type("Test")
        cy.get('textarea.feedback-input').type("This is a test")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    })
})