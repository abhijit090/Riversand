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
     cy.visit("https://navistarfs.riversand.com/login")
     cy.get('[id="1-email"]').type("navistarfs@riversand.com")
     cy.get('[id="1-password"]').type(('qEnm&b1A87a1'),{ log: false })
     cy.get('[id="1-submit"]').click() 
     cy.wait(30000)
     cy.url().should('include',Cypress.env('assert_var'))
    cy.wait(30000)
     //Import Data New item
     //click on Quick action
     cy.contains("Quick Actions").click()
     //click on upload entities
     cy.get("#actionItem").contains("Upload Entities").click()
     cy.wait(6000) 
    //select file
    cy.get('pebble-bulk-file-upload[id="fileUpload"]').find('input[type="file"]').selectFile('C:\\Users\\AJadhav\\Abhi_Git_Revrsesand\\Chic-Fila\\cypress\\fixtures\\Auto_test2.xlsx',{force: true})
     cy.wait(6000)
     // click on show task details
     cy.get('[title="Show task details"]').contains("Show task details").click({force:true})
      cy.wait(30000)
      // click on refresh button 
       cy.get('div[id="buttonGroupWrapper"]').find('pebble-button[id="refresh"][title="Refresh"]').click({force:true})
       cy.wait(30000)
       //click on cancel button
      cy.get('[title="Cancel"]').contains("Cancel").click({force:true})
      cy.wait(4000)
       //click on success button
      cy.get('[class="btn-link status-link"]').contains("Success").click({force:true})
      cy.wait(30000)
      // click on part number
      cy.get('[class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height grid-link ag-cell-value"]').click({force:true})
      cy.wait(30000)
      cy.pause()
      cy.get('div[id="buttonTextBox"][title="Submit"]').contains("Submit").click({force:true})
      cy.pause()
    
      // click on invalid data
      
      cy.get('[class="entity-content false"][title="Vendor Item Image Validation"]').click({force:true})
      cy.wait(30000)
      cy.get('div[class="text-ellipsis"][title="Add"]').contains("Add").click({force:true})
      cy.wait(30000)
      // select image
      cy.pause()
      cy.get('div[id="gridItem0"][style="left: 10px; top: 0px;"]').click({force:true})
      cy.pause()
      cy.wait(4000)
      //click on save
      cy.get('pebble-button[class="action-button-focus dropdownText btn btn-success m-l-5"][id="next"]').click({force:true})
      cy.wait(4000)
      //refresh
      cy.get('div[id="buttonGroupWrapper"]').find('pebble-button[id="refresh"][title="Previous changes have been processed by the system. Click here to see the changes"]').click({force:true})
      cy.wait(30000)
      cy.pause()
      // click on wf submit
      cy.get('div[id="buttonTextBox"][title="Submit"]').contains("Submit").click({force:true})
      cy.pause()
  
      




    })   
})