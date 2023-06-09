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
When('user click on "Search" button and User able to see the "Search Thing Domain" option',function()
{
    cy.get('[id="menuIcon 3"]').eq(0).click()
     cy.wait(4000)
});
When('user click on "Search Thing Domain" button and User able to see the "Search Thing Domain" screen',function()
{
    cy.get('[title="Search Thing Domain "]').eq(0).click({force:true})
     cy.wait(15000) 
});
When('user click on "Edit Filter" button and User able to see the selects "Entity Map" Options',function()
{
    cy.get('[title="Edit Filter"]').click({force:true})
     cy.wait(6000)
});
When('user click on "Vendor Item" checkbox and User able to see the selected " Vendor Item Entity Map" Options',function()
{
     cy.get('[id="headerCheckbox"]').eq(1).click({force:true})
     cy.wait(6000)
     cy.get('[class="has-only-option"]').contains("Vendor Item").click({force:true})
     cy.wait(6000)
});
When('user click on "Apply" button and User able to see the selects "Vendor Item" screen',function()
{
    cy.get('div[id="buttonTextBox"][title="Apply"]').eq(1).click({force:true})
     cy.wait(6000)
});
When('user click on "Search " box and Enter Vendor Item Number ',function()
{
    cy.get('div[class="search-container "]').find('input[is="iron-input"][placeholder="Search"]').click({force:true}).type("DA2250000{enter}")
     cy.wait(4000)
});
When('user click on "Checkbox " button and User able to see the selected "Vendor Iteam" ',function()
{
    cy.get('.ag-input-field-input.ag-checkbox-input').eq(9).click({force:true})
     cy.wait(4000)

});
When('user click on "Download " button and User able to see the Downloads options',function()
{
    cy.get('[d="M11.477 18.918a.715.715 0 0 0 1.047 0l8.612-9.05c.319-.334.094-.906-.357-.906h-4.465V1.398C16.314.625 15.718 0 14.982 0H9.018c-.736 0-1.332.625-1.332 1.398v7.564H3.221c-.45 0-.677.572-.358.906zM20.578 24c.786 0 1.422-.669 1.422-1.494s-.636-1.493-1.422-1.493H3.422c-.786 0-1.422.668-1.422 1.493C2 23.331 2.636 24 3.422 24z"]').eq(0).click({force:true})
     cy.wait(6000)
});
When('user click on "Download in excel " button and User able to see the "Download Bulk Entities - 1 entities" screen ',function()
{
    y.get('div[title="Download in Excel"][class="actionitem-with-icon"]').contains("Download in Excel").click({force:true})
     cy.wait(20000)
});
When('user click on "Download All" button and User able to see the Download "Vendor Iteam"',function()
{
    cy.get('[id="DownloadAll"][class="btn btn-secondary m-r-5"]').click({force:true})
     cy.wait(6000)
    
});
When('user click on "show task details" button and User able to see the "Entity Data Export" screen',function()
{
    cy.get('div[class="text-ellipsis"][title="Show task details"]').contains("Show task details").click({force:true})
     cy.wait(6000)
});
When('user click on "Refresh" button and User able to see the  export data succesfull  ',function()
{
    cy.get('div[id="buttonGroupWrapper"]').find('pebble-button[id="refresh"][title="Refresh"]').click({force:true})
    cy.wait(6000)
    cy.get('[style="display:block;transition: opacity 0.2s;z-index:1002;opacity:.6;position:fixed;top:0px;left:0px;width:100%;height:100%;background-color:#000;"]').invoke('remove')
});
When('user click on "Download option" button and User able to see the Download "Vendor Iteam" Excel file',function()
{
    cy.get('[d="M11.477 18.918a.715.715 0 0 0 1.047 0l8.612-9.05c.319-.334.094-.906-.357-.906h-4.465V1.398C16.314.625 15.718 0 14.982 0H9.018c-.736 0-1.332.625-1.332 1.398v7.564H3.221c-.45 0-.677.572-.358.906zM20.578 24c.786 0 1.422-.669 1.422-1.494s-.636-1.493-1.422-1.493H3.422c-.786 0-1.422.668-1.422 1.493C2 23.331 2.636 24 3.422 24z"]').eq(1).click({force:true})
     cy.get(2000)
});
When('user click on "HOME" button And User able to see the home page ',function()
{
    cy.get('[id="menuIcon 2"]').eq(1).click({force:true})
    cy.wait(8000)
});
When('user click on "Quick Actions" button',function()
{
    cy.contains("Quick Actions").click()
    cy.wait(6000)
});
When('user click on "Upload entities" and User able to see the "Upload bulk entities" screen',function()
{
    cy.get("#actionItem").contains("Upload Entities").click()
     cy.wait(20000) 
});
When('user click on "Upload File" and selects the import Vendor Item file.',function()
{
    cy.get('pebble-bulk-file-upload[id="fileUpload"]').find('input[type="file"]').selectFile('C:\\Users\\AJadhav\\Sager_gitClone_pull\\Chic-Fila\\cypress\\fixtures\\update1.xlsx',{force: true})
     cy.wait(6000)
});
When('user click on "Show Task details" and user able to view the "Entity Data Imports Processing" screen',function()
{
    cy.get('[title="Show task details"]').contains("Show task details").click({force:true})
     cy.wait(10000)
});
When('user click on "Refresh" button and Users until waiting for "Validation Status" not changing into the "Completed" status',function()
{
    // click on refresh button 
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
      cy.wait(20000)

});
When('user click on "Search" icon and Enter part number which are value provided in excel',function()
{
    cy.get('div[class="header-search-container"]').find('input[class="search-input"][placeholder="Search Attributes"]').click({force:true}).type("Part Number{enter}")
    cy.wait(8000)
    cy.get('span[title="Item Segment"]').scrollIntoView({ duration: 2000 })
    cy.wait(6000)
});
When('user click on Summary button ',function()
{
    cy.get("[title='Summary']").contains("Summary").click({force:true})
    cy.wait(4000)
});
When('user click on Sumbit button in workflow section',function()
{
    cy.get('div[id="buttonTextBox"][title="Submit"]').contains("Submit").click({force:true})
    cy.wait(4000)
});

