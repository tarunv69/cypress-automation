
/// <reference types = "cypress"/>




describe("Validation of login page", () => {
    // var result;

    it.only("Should be able to validate if all the elements are present in the page", () => {
        cy.visit("http://localhost:4200/auth/login")
    //     result = cy.request("http://localhost:4200/auth/login");
    //     cy.log(result.body)
    // result.its("status").should("equal", 404)
        // cy.fixture('user').then((user) => {
        // })
        cy.get('h4').contains('Login and explore the AI')
        cy.get('p').contains('Free forever. No credit card needed.')
        cy.get('p').contains('Don\'t have an account?')
        cy.get('button').contains('Login with Google')
        cy.get('[name="email"]').click()
        cy.get('[name="password"]')
        cy.get('[name="remember"]')
        cy.get('button[type="submit"]')
        cy.get('a[href$="register"]').click()
        cy.get('input[name="name"]')
        cy.get('input[name="email"]')
        cy.get('input[name="password"]')
        // cy.get(':nth-child(1) > .MuiCheckbox-root > .PrivateSwitchBase-input')//checkbox for terms and conditions
        cy.get('input[type="checkbox"]')
  .each(($elem, index) => {
    if (index === 1) {
      cy.wrap($elem).click();
    }
  })

        // cy.get('label').contains('I agree to LIFEdata').click()
        cy.get('label').contains('I agree to receive LIFEdata news and updates').click()

        cy.get(':nth-child(2) > .MuiCheckbox-root > .PrivateSwitchBase-input')//checkbox for newsletter
        cy.get('button[type="submit"]')
        cy.go('back')
        cy.get('a[href$="reset-password"]').click()
        cy.get('input[name="email"]')
        cy.get('button[type="submit"]')
        cy.get('a[href$="login"]').click()



})

    it("Should be able to generate validation codes to given registered mail id ", () => {
        cy.visit("http://localhost:4200/auth/login")
        // cy.fixture('user').then((user) => {
        // })
        // cy.get('[name="email"]').type("tarun.venkatesh007@gmail.com")
        const testEmail= getJSON
        cy.get('[name="password"]').type("Tarun@1998")
        cy.get('[name="remember"]').click()
        cy.get('button[type="submit"]').click()
        cy.get('div[role="alert"]').should('have.text','Incorrect username or password.')
        cy.get('a[href$="register"]').click()
        cy.get('input[name="name"]').type("Tarun_cypress")
        cy.get('input[name="email"]').type("tarun.venkatesh007@gmail.com")
        cy.get('input[name="password"]').type("Tarun@1998")
        cy.get(':nth-child(1) > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
        cy.get(':nth-child(2) > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
        cy.get('button[type="submit"]').click()
        

})

    it("Should not be able to login due to wrong password", () => {
        cy.visit("http://localhost:4200/auth/login")
        cy.get('[name="email"]').type("tarun.venkatesh007@gmail.com")
        cy.get('[name="password"]').type("Tarun@1998")
        cy.get('[name="remember"]').click()
        cy.get('button[type="submit"]').click()
        cy.get('div[role="alert"]').should('have.text','Incorrect username or password.') // Would be better if it is email instead of username 
       


    })   

    it("Should check working of forgot password", () => {
        cy.visit("http://localhost:4200/auth/login")
        cy.get('[name="email"]').type("tarun.venkatesh007@gmail.com")
        cy.get('[name="password"]').type("Tarun@1998")
        cy.get('[name="remember"]').click()
        cy.get('button[type="submit"]').click()
        cy.get('div[role="alert"]').should('have.text','Incorrect username or password.') 
        cy.get('a[href$="reset-password"]').click()
        cy.get('input[name="email"]').type("tarun.venkatesh007@gmail.com")
        cy.get('button[type="submit"]').click()
    }) 


    it("Should not be able to login and should validate that invalid email error is thrown", () => {
        cy.visit("http://localhost:4200/auth/login")
        cy.get('[name="email"]').type("tarun.venkatesh007@gmail")
        cy.get('[name="password"]').type("Tarun@1998")
        cy.get('[name="remember"]').click()
        cy.get('button[type="submit"]').click()
        cy.get('p[id]').should('have.text','Email must be a valid email address')
    })   

    it("Should be able to login", () => {
        cy.visit("http://localhost:4200/auth/login")
        cy.get('[name="email"]').type("tarun.venkatesh007@gmail.com")
        cy.get('[name="password"]').type("Tarun@1998")
        cy.get('[name="remember"]').click()
        cy.get('button[type="submit"]').click()
    })   

    it("Should be able to point out the fields required to be filled by users", () => {
        cy.visit("http://localhost:4200/auth/login")
        // cy.get('[name="email"]').type("tarun.venkatesh007@gmail.com")
        // cy.get('[name="password"]').type("Tarun@1998")
        // cy.get('[name="remember"]').click()
        cy.get('button[type="submit"]').click()
        cy.get('p[@innertext="Password is required"]').should('have.text','Email is required')
        cy.get('#mui-2-helper-text').should('have.text','Password is required')
    })   
 //login button should be enabled only after entering credentials in the fields


    it("Should remember the credentials once logged in and navigated back", () => {
        cy.visit("http://localhost:4200/auth/login")
        cy.get('[name="email"]').type("tarun.venkatesh007@gmail.com")
        cy.get('[name="password"]').type("Tarun@007")
        cy.get('[name="remember"]').click()
        cy.get('button[type="submit"]').click()
        cy.go('back') // back doesn't work once logged in security error 
    })   


    it("Should clear email and password fields once it reloads", () => {
        cy.visit("http://localhost:4200/auth/login")
        cy.get('[name="email"]').type("tarun.venkatesh007@gmail.com")
        cy.get('[name="password"]').type('superSecret123')
        cy.get('[name="remember"]').click()
        cy.get('.MuiBox-root > path').click()
        cy.reload()
    })

    
})