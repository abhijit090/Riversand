/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe';
import 'cypress-file-upload';

describe('Navistar', ()=>
{
    it('Navistar2', ()=>
    {
      Cypress.on('uncaught:exception', (err, runnable, promise) => {
        if (promise) {
          return false
        }
      })
      cy.clearAllCookies()
      cy.clearAllLocalStorage()
    //login
    cy.visit("/")
    cy.get('[id="1-email"]').type(Cypress.env('username'))
    cy.get('[id="1-password"]').type(Cypress.env('password'),{ log: false })
    cy.get('[id="1-submit"]').click() 
    cy.wait(30000)
    cy.url().should('include',Cypress.env('assert_var'))
     cy.wait()
     

    })   
})