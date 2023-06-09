import {Given,When,Then } from "@badeball/cypress-cucumber-preprocessor"
import GetDate from "../../GetDate";
Given("User is on Login page",()=>
{
    cy.visit("https://navistarfs.riversand.com/login")
});
When('user Enter Username',function()
{
    cy.get('[id="1-email"]').type("navistarfs@riversand.com")
});
When('user Enter Password',function()
{
    cy.get('[id="1-password"]').type(('qEnm&b1A87a1'),{ log: false })
})    
When('user click on Login button',function()
{
    cy.get('[id="1-submit"]').click() 
    cy.wait(30000)
    cy.url().should('include',Cypress.env('assert_var'))
    cy.wait(10000)
});
When('after succesfull login user click on Quick Actions button',function()
{
    cy.wait(30000)
    cy.contains("Quick Actions").click()
});
When('user click on "Upload entities" and User able to see the "Upload bulk entities" screen',function()
{
    cy.get("#actionItem").contains("Upload Entities").click()
     cy.wait(20000) 
});
When('user click on "Upload File" and selects the import Vendor Item file.',function()
{
    cy.get('pebble-bulk-file-upload[id="fileUpload"]').find('input[type="file"]').selectFile('C:\\Users\\AJadhav\\Sager_gitClone_pull\\Chic-Fila\\cypress\\fixtures\\Auto_test1.xlsx',{force: true})
     cy.wait(10000)
});
When('user click on "Show Task details" and user able to view the "Entity Data Imports Processing" screen',function()
{
    cy.get('[title="Show task details"]').contains("Show task details").click({force:true})
      cy.wait(30000)
});
When('user click on "Refresh" button and Users until waiting for "Validation Status" not changing into the "Completed" status',function()
{
    c// click on refresh button 
    cy.get('div[id="buttonGroupWrapper"]').find('pebble-button[id="refresh"][title="Refresh"]').click({force:true})
    cy.wait(30000)
    //click on cancel button
   cy.get('[title="Cancel"]').contains("Cancel").click({force:true})
   cy.wait(4000)
});
When('user click on "Success" button and User able to view the "Entity Data Imports Completed" screen',function()
{
    cy.get('[class="btn-link status-link"]').contains("Success").click({force:true})
      cy.wait(30000)
});
When('user click on "Part Number" id and User able to view the "Vendor Item" screen',function()
{
    cy.get('[class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height grid-link ag-cell-value"]').click({force:true})
    cy.wait(30000)

});
When('user click on "Search" icon and Enter part number which are value provided in excel',function()
{
     cy.get('div[class="header-search-container"]').find('input[class="search-input"][placeholder="Search Attributes"]').click({force:true}).type("Part Number{enter}")
      cy.wait(6000)
      cy.get('span[title="Item Segment"]').scrollIntoView({ duration: 2000 })
      cy.wait(8000)
});
When('user click on Summary button ',function()
{
    cy.get("[title='Summary']").contains("Summary").click({force:true})
cy.wait(6000)
});
When('user click on Sumbit button in workflow section',function()
{
    cy.get('div[id="buttonTextBox"][title="Submit"]').contains("Submit").click({force:true})
cy.wait(6000)
});


