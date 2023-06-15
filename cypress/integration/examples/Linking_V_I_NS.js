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
    cy.wait(10000)
// 1st file import (Item file upload)
    //  click on Quick action.....................................................
    cy.contains("Quick Actions").click()
    cy.wait(2000)
     //click on upload entities
    cy.get("#actionItem").contains("Upload Entities").click()
    cy.wait(6000) 
    //select file
    cy.get('pebble-bulk-file-upload[id="fileUpload"]').find('input[type="file"]').selectFile('C:\\Users\\AJadhav\\Abhi_Git_Revrsesand\\Chic-Fila\\cypress\\fixtures\\Item_HKPI.xlsx',{force: true})
    cy.wait(6000)
     // click on show task details
    cy.get('[title="Show task details"]').contains("Show task details").click({force:true})
    cy.wait(30000)
      // click on refresh button 
    cy.get('div[id="buttonGroupWrapper"]').find('pebble-button[id="refresh"][title="Refresh"]').click({force:true})
    cy.wait(10000)
     //click on cancel button
    cy.get('[title="Cancel"]').contains("Cancel").click({force:true})
    cy.wait(2000)
     // click on error button
    cy.get('[class="btn-link status-link"]').contains("Error").click({force:true})
    cy.wait(6000)
    //      //click on Quick action
    // cy.contains("Quick Actions").click()
    //  //click on upload entities
    // cy.get("#actionItem").contains("Upload Entities").click()
    // cy.wait(6000) 
    // //select file
    // cy.get('pebble-bulk-file-upload[id="fileUpload"]').find('input[type="file"]').selectFile('C:\\Users\\AJadhav\\Abhi_Git_Revrsesand\\Chic-Fila\\cypress\\fixtures\\Item_hPK.xlsx',{force: true})
    // cy.wait(6000)
    //  // click on show task details
    // cy.get('[title="Show task details"]').contains("Show task details").click({force:true})
    // cy.wait(30000)
    //   // click on refresh button 
    // cy.get('div[id="buttonGroupWrapper"]').find('pebble-button[id="refresh"][title="Refresh"]').click({force:true})
    // cy.wait(10000)
    //  //click on cancel button
    // cy.get('[title="Cancel"]').contains("Cancel").click({force:true})
    // cy.wait(2000)
    
    //   //click on create button
    //   // cy.get('[class="create cursor-default"]').contains("Create").click({force:true})
    //   //click on update button
    //   // cy.get('[class="btn-link status-link"]').contains("Update").click({force:true})

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
      //click on summary tab
    cy.get("[title='Summary']").contains("Summary").click({force:true})
    cy.wait(4000)
      //click on home button
    cy.get('[id="menuIcon 2"]').eq(1).click({force:true})
    cy.wait(6000)
// // 2nd item (Vendor Item file Upload)......................................
      //Click on Quick Action
    cy.contains("Quick Actions").click()
    cy.wait(4000)
     //click on upload entities
    cy.get("#actionItem").contains("Upload Entities").click()
    cy.wait(10000) 
    //select file
    cy.get('pebble-bulk-file-upload[id="fileUpload"]').find('input[type="file"]').selectFile('C:\\Users\\AJadhav\\Abhi_Git_Revrsesand\\Chic-Fila\\cypress\\fixtures\\V_L.xlsx',{force: true})
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
    cy.get('[class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height grid-link ag-cell-value"]').click({force:true})
    cy.wait(20000)
      // click on search
    cy.get('div[class="header-search-container"]').find('input[class="search-input"][placeholder="Search Attributes"]').click({force:true}).type("Part Number{enter}")
    cy.wait(6000)
    cy.get('span[title="Item Segment"]').scrollIntoView({ duration: 2000 })
    cy.wait(6000)
      //click on summary tab
    cy.get("[title='Summary']").contains("Summary").click({force:true})
    cy.wait(4000)
    //click on relastionship 
    cy.get('[class="relationships-summary__item-wrapper"]').find('[class="relationships-summary-item"][title="Items"]').click({force:true})
    cy.wait(6000)
    //click on item part number
    cy.get('[class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height grid-link ag-cell-value"]').eq(0).click({force:true})
    cy.wait(4000)
    //Select E-commarce Approval(Add comment)
    cy.get('[class="textarea-container fit"]').eq(0).click({force:true}).type("E-Commarce Approval{enter}")
    cy.wait(4000)
    //click on Approve button or reject wf
    cy.get('div[id="buttonTextBox"][title="Approve"]').contains("Approve").click({force:true})
    cy.wait(8000)
    // click on home button
    cy.get('[id="menuIcon 2"]').eq(1).click({force:true})
    cy.wait(8000)
    //click on Vendor Submission
    // cy.get('[title="Vendor Submission"]').eq(1).contains(" Vendor Submission ").click({force:true})
    cy.get('[id="tab-vendorSubmission"]').find('[title="Vendor Submission"]').contains(" Vendor Submission ").click({force:true})
    cy.wait(8000)
    //click on vendor enrichment
    cy.get('[id="workflowMetadataContainer"][class="list-content to-do-name block-text text-ellipsis"]').contains("Vendor Enrichment").click({force:true})
    cy.wait(15000)
    //search  vendor item number(Item move can Data enrichment Wf to vendor enrichment Wf)
    // cy.get('div[class="search-container "]').find('input[is="iron-input"][placeholder="Search"]').click({force:true}).type("Test123{enter}")
    cy.get('div[class="input-panel"][title="Search"]').eq(0).click({force:true}).type("Test123{enter}")
    cy.wait(8000)
    //click on part number
    cy.get('[class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height grid-link ag-cell-value"][title="Test123"]').contains("Test123").click({force:true})
    // click on summary tab
    cy.wait(4000)
    cy.get("[title='Summary']").contains("Summary").click({force:true})
    cy.wait(4000)
    
   
    cy.pause()
    //click on submit button 
    cy.get('div[id="buttonTextBox"][title="Submit"]').contains("Submit").click({force:true})
      cy.wait(4000)

    })   
})