/// <reference types = "cypress"/>

describe("Test contact us page via Automation test store", () => {
    it("Should be able to submit a successful submission via Contact us form", () => {
        cy.visit("https://www.automationteststore.com/")
        // cy.xpath("//a[contains(@href,'contact')]").click()
        cy.get("a[href$='contact']").click()
        cy.get('[name="first_name"]').type("Cypress")

        cy.get('#ContactUsFrm_email').type("saitarunbv@gmail.com")
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')
        cy.get('#ContactUsFrm_enquiry').type('This is a test')
        cy.get("[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    
    })
})