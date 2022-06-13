/// <reference types = "cypress"/>




describe("Work flow check", () => {

    before(function(){
        cy.fixture('example').then(function(data){
            globalThis.data =data ;
        })
    })

it("Should be able to login and create new workflow in dashboard ", () => {
   
    cy.visit("http://localhost:4200/auth/login")
    cy.get('[name="email"]').type(data.email)
    cy.get('[name="password"]').type(data.password)
    cy.get('[name="remember"]').click()
    cy.get('button[type="submit"]').click() 
    cy.wait(6000)
    cy.get('a[aria-label="Dashboard"]').click({force: true})
    cy.wait(3000)
    cy.get('h6').contains(data.name).click()
    


})
})