/// <reference types = "cypress"/>




describe("Work flow check", () => {

    before(function(){
        cy.fixture('example').then(function(workflowdata){
            globalThis.data =workflowdata ;
        })
    })

it("Should be able to login and create new workflow in dashboard ", () => {
   
    cy.visit("http://localhost:4200/auth/login")
    cy.get('[name="email"]').type(workflowdata.email)
    cy.get('[name="password"]').type(workflowdata.password)
    cy.get('[name="remember"]').click()
    cy.get('button[type="submit"]').click() 
    cy.wait(6000)
    cy.get('a[aria-label="Dashboard"]').click({force: true})
    cy.get('button').contains('CREATE NEW').click()
    cy.wait(1000)
    cy.get('input[value="Workflow"]').click()

    cy.get('input[type="text"]').type(workflowdata.name)
    cy.get('button').contains('Create')
    cy.wait(1000)



})
})