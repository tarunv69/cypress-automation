/// <reference types = "cypress"/>




describe("flowbuilder check", () => {

it("Should be able to launch and run flowbuilder", () => {
var userMail;
var userPassword;
    cy.fixture('profile').as('profileJson') 
    cy.get('@profileJson').then((profile) => {
     userMail = profile.email 
     userPassword = profile.password
     cy.log(userMail)
     cy.log(userPassword)
    
    }) 


    cy.visit("http://localhost:4200/auth/login")
    cy.get('[name="email"]').type(userMail)
    cy.get('[name="password"]').type(userPassword)
    cy.get('[name="remember"]').click()
    cy.get('button[type="submit"]').click() 
    cy.get('a[href$="dashboard"]').click()
    cy.get('h6').contains('test')




})
})