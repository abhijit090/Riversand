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
     
     //click on search icon......Exportdata
     cy.wait(6000)
    //  cy.get('[id="menuIcon 3"]').eq(0).click()
    //  cy.wait(5000)
    //  cy.get('[title="Search Thing Domain "]').eq(0).click({force:true})
    //  cy.wait(6000)
    //  cy.get('[title="Edit Filter"]').click({force:true})
    //  cy.wait(6000)
    //  cy.get('[id="headerCheckbox"]').eq(1).click({force:true})
    //  cy.wait(6000)
    //  cy.get('[class="has-only-option"]').contains("Vendor Item").click({force:true})
    //  cy.wait(6000)
    //  cy.get('[id="buttonTextBox"]').contains("Apply").click({force:true})
    //  cy.wait(6000)
    //  cy.get('[id="ag-6999-input"]').click({force:true})
    //  cy.wait(6000)
    //  cy.get('[class="dropdownText dropdownIcon btn btn-actions m-l-5 m-r-5"]').eq(0).click({force:true})
    //  cy.wait(6000)
    //  cy.get('[title="Download in Excel"]').eq(0).click({force:true})
    //  cy.wait(6000)
    cy.wait(20000)
     //Import Data New item
     //click on Quick action
     cy.contains("Quick Actions").click()
     //click on upload entities
     cy.get("#actionItem").contains("Upload Entities").click()
     cy.wait(10000) 
    //select file
    cy.get('pebble-bulk-file-upload[id="fileUpload"]').find('input[type="file"]').selectFile('C:\\Users\\AJadhav\\Abhi_Git_Revrsesand\\Chic-Fila\\cypress\\fixtures\\Auto_test1.xlsx',{force: true})
     cy.wait(10000)
     // click on show task details
     cy.get('[title="Show task details"]').contains("Show task details").click({force:true})
      cy.wait(30000)
      // click on refresh button 
       cy.get('div[id="buttonGroupWrapper"]').find('pebble-button[id="refresh"][title="Refresh"]').click({force:true})
       cy.wait(10000)
       //click on cancel button
      cy.get('[title="Cancel"]').contains("Cancel").click({force:true})
      cy.wait(2000)
       //click on create button
      // cy.get('[class="create cursor-default"]').contains("Create").click({force:true})
      //click on update button
      // cy.get('[class="btn-link status-link"]').contains("Update").click({force:true})

       //click on success button
      cy.get('[class="btn-link status-link"]').contains("Success").click({force:true})
      cy.wait(15000)
      // click on part number
      // cy.get('[title="DA2259999"]').click({force:true})
      
      cy.get('[class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height grid-link ag-cell-value"]').click({force:true})
      cy.wait(20000)
      // click on search
      cy.get('div[class="header-search-container"]').find('input[class="search-input"][placeholder="Search Attributes"]').click({force:true}).type("Part Number{enter}")
      cy.wait(8000)
      cy.get('span[title="Item Segment"]').scrollIntoView({ duration: 2000 })
      cy.wait(8000)
      
      cy.pause()
      cy.wait(6000)
      cy.get("[title='Summary']").contains("Summary").click({force:true})
     cy.pause()
     cy.wait(4000)
      // wf submit
      cy.get('div[id="buttonTextBox"][title="Submit"]').contains("Submit").click({force:true})
      cy.pause()


      // // click on invalid data validation image part
      
      // cy.get('[class="entity-content false"][title="Vendor Item Image Validation"]').click({force:true})
      // cy.wait(30000)
      // // click on add button
      // cy.get('div[class="text-ellipsis"][title="Add"]').contains("Add").click({force:true})
      // cy.wait(30000)
      // // select image
      // cy.pause()
      // cy.get('div[class="item-container"]').each(($el, index, $list) => {
      //       // $el is a wrapped jQuery element
      //       console.log($el, index )
      //       cy.wrap($el).click({force:true})
      //     })
      
      // // .click({force:true})
      // cy.wait(30000)
      // // click on save").click({force:true})
      // cy.pause()
      // cy.wait(4000)
      // //click on save
      // cy.get('pebble-button[class="action-button-focus dropdownText btn btn-success m-l-5"][id="next"]').click({force:true})
      // cy.wait(4000)
      // //refresh
      // cy.get('div[id="buttonGroupWrapper"]').find('pebble-button[id="refresh"][title="Refresh"]').click({ multiple: true})
      // cy.wait(6000)
      // //click on summary tab
      // cy.get("[title='Summary']").click({force:true})
      
      // // click on invalid data
      // // remove yes
      // // cy.get('[class="pebble-icon-size-8 cursor-pointer"]').eq(1).click({force:true})
      // // cy.get('[class="dropdown-icon flow-icon-size-12"]').eq(0).contains("Yes").click({force:true})
      // // cy.wait(6000)
     
      // // // click on PADB attribute

      // // cy.wait(6000)
      // // cy.get('[class="pebble-icon-size-8 cursor-pointer"]').eq(2).click({force:true})
      // // cy.get('[class="dropdown-icon flow-icon-size-12"]').eq(1).click({force:true})
      // // cy.wait(6000)
      // // cy.get('[class="has-only-option"]').eq(8).click({force:true})
      // // cy.wait(6000)
      
      // // cy.get('div[class="attribute-group-container-wrapper full-height"]').eq(2).click({force:true})
      // // cy.wait(6000)
      // // //Global att
      // // cy.get('[class="attribute-name"]').contains("Engine Control Module (ECM) (10543)").click({force:true})
      // // cy.wait(6000)
      // // cy.pause()
      // // cy.get('pebble-icon[class="pebble-icon-size-8 cursor-pointer"]').eq(3).click({force:true})
      // // cy.wait(6000)




      // // cy.get('[class="iconButton pebble-icon-size-10 toggle-icon collapsed"]').eq(0).click({force:true})
      // // cy.wait(30000)
      // // cy.get('[class="iconButton pebble-icon-size-10 toggle-icon collapsed"]').eq(2).click({force:true})
      // // cy.pause()
      // // cy.wait(6000)
      // // cy.get('[class="search-bar-container"]').type("Plastic Sheeting (67520){enter}",{force:true})
      // // cy.wait(16000)
      // // cy.pause()
      
      // // cy.wait(6000)
      // // cy.get('[id="buttonTextBox"]').contains("Select").click({force:true})
      // // cy.wait(6000)
      // // cy.pause()
      // // cy.get('[title="Save"]').contains("Save").click({force:true})
      // // cy.wait(6000)
      // cy.pause()
      // // click on wf submit
      // cy.get('div[id="buttonTextBox"][title="Submit"]').contains("Submit").click({force:true})
      // cy.pause()
  
      




    })   
})