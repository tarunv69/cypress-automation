/// <reference types="cypress"/>

import { randEmail, randFullName } from '@ngneat/falso';


describe("Test get request", () => {
    it("Should be able to get request", () => {
//         var user;
// cy.fixture(users.json).then((user) => {
//     cy.get('#username').type(user.email, { delay: 100 }).should('have.value', user.email)
//     cy.get('#password').type(user.password)
//     cy.log(user.email)
//   })


const user = { email: randEmail(), name: randFullName() };

const emails = randEmail({ length: 10 });

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