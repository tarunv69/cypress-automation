/// <reference types="cypress"/>

import { randEmail, randFullName, randPassword } from '@ngneat/falso';


describe("Test get request", () => {
    it("Should be able to get request", () => {
//         var user;
// cy.fixture(users.json).then((user) => {
//     cy.get('#username').type(user.email, { delay: 100 }).should('have.value', user.email)
//     cy.get('#password').type(user.password)
//     cy.log(user.email)
//   })


const user = { email: randEmail(), name: randFullName(), password: randPassword() };

const emails = randEmail({ length: 10 });
const passwords = randPassword({ length: 1 });
emails.forEach(email => {
    passwords.forEach(password => {
    
    cy.visit("http://localhost:4200/auth/login")
    cy.get('[name="email"]').type(email)
    cy.get('[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.delay


})
})



  cy.fixture('users').as('usersJson') 
    cy.get('@usersJson').then((users) => { 
        
cy.log(users[0].email)
cy.log(users[1].email)
cy.log(users[2].email)
cy.log(users[0].password)

var userMail = users[0].email


        
      
     })

})
})