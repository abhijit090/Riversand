import {Given,When,Then } from "@badeball/cypress-cucumber-preprocessor"
// import GetDate from "../../GetDate";
import 'cypress-iframe';
import 'cypress-file-upload';
Given("user is on loGin page",()=>
{
    cy.visit("https://navistarfs.riversand.com/login")
});
When('user Enter USERname',function()
{
    cy.get('[id="1-email"]').type(Cypress.env('username'))
});
When('user Enter PASSword',function()
{
    cy.get('[id="1-password"]').type(Cypress.env('password'),{ log: false })
})    
When('user click on LoGin Button',function()
{
    cy.get('[id="1-submit"]').click() 
    cy.wait(30000)
    cy.url().should('include',Cypress.env('assert_var'))
    cy.wait(12000)
});
When('after succesfull login user click on "Quick Actions" button and upload first item file',function()
{
    cy.contains("Quick Actions").click()
    cy.wait(4000)
});
When('user click on "Upload entities" and User able to see the "Upload bulk entities" screen',function()
{
    cy.get("#actionItem").contains("Upload Entities").click()
    cy.wait(8000) 
});
When('user click on "uploAD FilE" and selects the import Item file',function()
{
    cy.get('pebble-bulk-file-upload[id="fileUpload"]').find('input[type="file"]').selectFile('C:\\Users\\AJadhav\\Abhi_Git_Revrsesand\\Chic-Fila\\cypress\\fixtures\\Item_HKPI.xlsx',{force: true})
    cy.wait(8000)
});
When('user click on "show task Details" and user able to view the "eNtity datA import processinG" screen',function()
{
    cy.get('[title="Show task details"]').contains("Show task details").click({force:true})
    cy.wait(30000)
});
When('user click on "ReFresH" button and Users until waiting for "validation status" not changing into the "Completed" status',function()
{
    // click on refresh button 
    cy.get('div[id="buttonGroupWrapper"]').find('pebble-button[id="refresh"][title="Refresh"]').click({force:true})
    cy.wait(10000)
     //click on cancel button
    cy.get('[title="Cancel"]').contains("Cancel").click({force:true})
    cy.wait(2000)
});
// When('user click on "erroR" button and user able to see Error details page',function()
// {
//     cy.get('[class="btn-link status-link"]').contains("Error").click({force:true})
//     cy.wait(4000)
// });
When('user click on "sUccess" button and User able to view the "entIty datA imporTs compLeted" screen',function()
{
    cy.get('[class="btn-link status-link"]').contains("Success").click({force:true})
    cy.wait(17000)

});
When('user click on "PaRt nUmber" id and User able to view the "iteM" screen',function()
{
    cy.get('[class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height grid-link ag-cell-value"]').click({force:true})
    cy.wait(20000)
});
When('user click on "sEArch" icon and Enter part number which are value provided in excel',function()
{
    cy.get('div[class="header-search-container"]').find('input[class="search-input"][placeholder="Search Attributes"]').click({force:true}).type("Part Number{enter}")
    cy.wait(4000)
    cy.get('span[title="Item Segment"]').scrollIntoView({ duration: 2000 })
    cy.wait(6000)
});
When('user click on "suMMary" tab',function()
{
    cy.get("[title='Summary']").contains("Summary").click({force:true})
    cy.wait(4000)
});
When('user click on "hOme" button and Upload second file Vendor item',function()
{
    cy.get('[id="menuIcon 2"]').eq(1).click({force:true})
    cy.wait(6000)
});
When('user click on "qUIck acTion" button',function()
{
    cy.contains("Quick Actions").click()
    cy.wait(4000)
});
When('user click on "UploaD enTities" and User able to see the "UPload buLk entITies" screen',function()
{
    cy.get("#actionItem").contains("Upload Entities").click()
    cy.wait(8000) 
});
When('user click on "UPLoad FiLe" and selects the import Vendor Item file',function()
{
    cy.get('pebble-bulk-file-upload[id="fileUpload"]').find('input[type="file"]').selectFile('C:\\Users\\AJadhav\\Abhi_Git_Revrsesand\\Chic-Fila\\cypress\\fixtures\\V_L.xlsx',{force: true})
    cy.wait(10000)
});
When('user click on "SHow TAsk deTAils" and user able to view the "entitY datA impOrts prOCessing" screen',function()
{
    cy.get('[title="Show task details"]').contains("Show task details").click({force:true})
    cy.wait(30000)
    
});
When('user click on "reFREsh" button and Users until waiting for "vaLIdatIon stATUs" not changing into the "CoMPleted" status',function()
{
    // click on refresh button 
    cy.get('div[id="buttonGroupWrapper"][class="buttonGroupWrapper"]').eq(0).find('pebble-button[id="refresh"][title="Refresh"]').click({force:true})
    cy.wait(10000)
       //click on cancel button
    cy.get('[title="Cancel"]').contains("Cancel").click({force:true})
    cy.wait(2000)
});
// When('user click on "Error" button and user able to see error details page',function()
// {
//     cy.get('[class="btn-link status-link"]').contains("Error").click({force:true})
//     cy.wait(6000)
// });
When('user click on "SUCCess" button and User able to view the "eNtiTy datA impoRts coMPleted" screen',function()
{
    cy.get('[class="btn-link status-link"]').contains("Success").click({force:true})
    cy.wait(15000)

});
When('user click on "pART numBER" id and User able to view the "ITEM" screen',function()
{
    cy.get('[class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height grid-link ag-cell-value"]').eq(0).click({force:true})
    cy.wait(20000)
});
When('user click on "SEARCh" icon and Enter part number which are value provided in excel',function()
{
    cy.get('div[class="header-search-container"]').eq(0).find('input[class="search-input"][placeholder="Search Attributes"]').click({force:true}).type("Part Number{enter}")
    cy.wait(4000)
    cy.get('span[title="Item Segment"]').scrollIntoView({ duration: 2000 })
    cy.wait(6000)
});
When('user click on "sumMARy" tab',function()
{
    cy.get("[title='Summary']").contains("Summary").click({force:true})
    cy.wait(4000)
    
});
When('user click on "ItEMs" button inside of relastionship widget',function()
{
    // cy.get('[class="relationships-summary__item-wrapper"]').find('div[class="relationships-summary-item"][title="Items"]').click({force:true})
    cy.get('[class="relationships-summary-item"][title="Items"]').contains("Items").click({force:true})
    cy.wait(6000)
    
});
When('user click on "iTEm" part number',function()
{
    cy.get('[class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height grid-link ag-cell-value"]').eq(1).click({force:true})
    cy.wait(6000)
});
When('user click on "AddComment" text field under "eCOmmerce Approval" Workflow',function()
{
    cy.get('[class="textarea-container fit"]').eq(0).click({force:true}).type("E-Commarce Approval{enter}")
    cy.wait(4000)
});
When('user click on "APPRove" button Workflow move can "VendorenrIchment" stage',function()
{
    cy.get('div[id="buttonTextBox"][title="Approve"]').contains("Approve").click({force:true})
    cy.wait(6000)
});
When('user click on "HOme" button',function()
{
    cy.get('[id="menuIcon 2"]').eq(1).click({force:true})
    cy.wait(8000)
});
When('user click on "VendorSubmission" task under "MyTo-Dos" widget',function()
{
    cy.get('[id="tab-vendorSubmission"]').find('[title="Vendor Submission"]').contains(" Vendor Submission ").click({force:true})
    cy.wait(8000)
});
When('user click on "VendoR EnRIchment" task and user able to see "VENdor ItEm" screen',function()
{
    cy.get('[id="workflowMetadataContainer"][class="list-content to-do-name block-text text-ellipsis"]').contains("Vendor Enrichment").click({force:true})
    cy.wait(15000)

});
When('user click on "SeARch" tab and user search vendor item',function()
{
    cy.get('div[class="input-panel"][title="Search"]').eq(0).click({force:true}).type("Test123{enter}")
    cy.wait(8000)
});
When('user click on "PartNo" number',function()
{
    cy.get('[class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height grid-link ag-cell-value"][title="Test123"]').contains("Test123").click({force:true})
});
When('user click on sumMaRy tab',function()
{
    cy.get("[title='Summary']").contains("Summary").click({force:true})
    cy.wait(4000)
    cy.pause()
});
When('user click on suMbit button in workflow section',function()
{
    cy.get('div[id="buttonTextBox"][title="Submit"]').contains("Submit").click({force:true})
    cy.wait(4000)
});


