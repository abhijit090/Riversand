/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe';
import 'cypress-file-upload';

describe('Navistar', ()=>
{

  // beforeEach(() => {
  //   cy.session("Navistar", () => {
  //    cy.visit("/")
  //    cy.get('[id="1-email"]').type(Cypress.env('username'))
  //    cy.get('[id="1-password"]').type(Cypress.env('password'),{ log: false })
  //    cy.get('[id="1-submit"]').click() 
  //    cy.wait(30000)
  //    cy.url().should('include',Cypress.env('assert_var'))
  //   })
  //   {cacheAcrossSpecs:true}
  // })
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
    // cy.session("Navistar", () => {
      cy.visit("/")
      cy.get('[id="1-email"]').type(Cypress.env('username'))
      cy.get('[id="1-password"]').type(Cypress.env('password'),{ log: false })
      cy.get('[id="1-submit"]').click() 
      cy.wait(30000)
      cy.url().should('include',Cypress.env('assert_var'))
    //  })
     //Exportdata
     //click on search icon on navigation pannel
     cy.wait(10000)
     cy.get('[id="menuIcon 3"]').eq(0).click()
     cy.wait(2000)
    //  click on Search thing domain
     cy.get('[title="Search Thing Domain "]').eq(0).click({force:true})
     cy.wait(10000)
    //  click on edit filter option
     cy.get('[title="Edit Filter"]').click({force:true})
     cy.wait(6000)
    //  select vendor entity map
     cy.get('[id="headerCheckbox"]').eq(1).click({force:true})
     cy.wait(6000)
     cy.get('[class="has-only-option"]').contains("Vendor Item").click({force:true})
     cy.wait(4000)
    //  click on apply button
     cy.get('div[id="buttonTextBox"][title="Apply"]').eq(1).click({force:true})
     cy.wait(6000)
   
    //  Search option
     cy.get('div[class="search-container "]').find('input[is="iron-input"][placeholder="Search"]').click({force:true}).type("DA2250022{enter}")
     cy.wait(4000)
     //Select At least one data
     cy.get('.ag-input-field-input.ag-checkbox-input').eq(9).click({force:true})
     cy.wait(4000)
     
    //  .each(($el, index, $list) => {
    //     // $el is a wrapped jQuery element
    //     console.log($el, index )
    //     cy.wrap($el).click({force:true})
    //   })
    // Select Download option
     cy.get('[d="m11.291 13.684-10.996-11.842c-0.63053-0.67902-0.18335-1.842 0.70879-1.842h21.991c0.89325 0 1.3404 1.163 0.7099 1.842l-10.996 11.842c-0.3924 0.42138-1.0263 0.42138-1.4176 0"]').eq(0).click({force:true})
     cy.wait(6000)
    //  click on download in excel
     cy.get('div[title="Download in Excel"][class="actionitem-with-icon"]').contains("Download in Excel").click({force:true})
     cy.wait(10000)
     cy.pause()
    //  Click on Download All
    //  cy.get('[id="DownloadAll"][class="btn btn-secondary m-r-5"]').click({force:true})
    cy.get('div[id="buttonTextBox"][class="text-ellipsis"]').contains("Download All").click({force:true})
    cy.wait(2000)
  //   cy.pause()
  //  // click on finish and close
  //  cy.get('div[class="text-ellipsis"][title="Finish & Close"]').contains("Finish & Close").click({force:true})
  //   cy.wait(6000)
  //   cy.pause()
     //click on show task details
     cy.get('div[class="text-ellipsis"][title="Show task details"]').contains("Show task details").click({force:true})
     cy.wait(10000)
     //cy.clearCookie()

     cy.visit("https://navistarfs.riversand.com/task-detail?id=6354ee8f-2b60-47ba-88aa-ce87aac1a43a").wait
     cy.wait(7000)
     cy.pause()
    // Click on Refresh button
     cy.get('div[id="buttonGroupWrapper"]').find('pebble-button[id="refresh"][title="Refresh"]').click({force:true})
     cy.wait(20000)
     cy.get('[style="display:block;transition: opacity 0.2s;z-index:1002;opacity:.6;position:fixed;top:0px;left:0px;width:100%;height:100%;background-color:#000;"]').invoke('remove')
     //click on download option
     cy.wait(10000)
     cy.get('div[id="buttonGroupWrapper"]').find('pebble-button[id="downloadtaskfile"][title="Download File"]').click({force:true})
    //  cy.get('[d="M11.477 18.918a.715.715 0 0 0 1.047 0l8.612-9.05c.319-.334.094-.906-.357-.906h-4.465V1.398C16.314.625 15.718 0 14.982 0H9.018c-.736 0-1.332.625-1.332 1.398v7.564H3.221c-.45 0-.677.572-.358.906zM20.578 24c.786 0 1.422-.669 1.422-1.494s-.636-1.493-1.422-1.493H3.422c-.786 0-1.422.668-1.422 1.493C2 23.331 2.636 24 3.422 24z"]').eq(1).click({force:true})
     cy.get(4000)
     //click on home button
     cy.get('[id="menuIcon 2"]').eq(1).click({force:true})
     cy.wait(10000)
     //click on Quick action
     cy.contains("Quick Actions").click()
     cy.wait(6000)
     //click on upload entities
     cy.get("#actionItem").contains("Upload Entities").click()
     cy.wait(10000) 
    //select file
     cy.get('pebble-bulk-file-upload[id="fileUpload"]').find('input[type="file"]').selectFile('C:\\Users\\AJadhav\\Sager_gitClone_pull\\Chic-Fila\\cypress\\fixtures\\update1.xlsx',{force: true})
     cy.wait(6000)
     // click on show task details
     cy.get('[title="Show task details"]').contains("Show task details").click({force:true})
     cy.wait(10000)
      // click on refresh button 
     cy.get('div[id="buttonGroupWrapper"]').find('pebble-button[id="refresh"][title="Refresh"]').click({force:true})
     cy.wait(30000)
      //click on cancel button
     cy.get('[title="Cancel"]').contains("Cancel").click({force:true})
     cy.wait(4000)
     cy.get('div[id="buttonGroupWrapper"]').find('pebble-button[id="refresh"][title="Refresh"]').click({force:true})
     cy.wait(6000)
       //click on success button
     cy.get('[class="btn-link status-link"]').contains("Success").click({force:true})
     cy.wait(30000)
      // click on part number
      // cy.get('[title="DA2259999"]').click({force:true})
      
      cy.get('[class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height grid-link ag-cell-value"]').click({force:true})
      cy.wait(20000)
      // click on search
      cy.get('div[class="header-search-container"]').find('input[class="search-input"][placeholder="Search Attributes"]').click({force:true}).type("Part Number{enter}")
      cy.wait(8000)
      cy.get('span[title="Item Segment"]').scrollIntoView({ duration: 2000 })
      cy.wait(6000)
      //click on summary tab
      cy.get("[title='Summary']").contains("Summary").click({force:true})
      cy.pause()
      cy.wait(4000)
      // wf submit
      cy.get('div[id="buttonTextBox"][title="Submit"]').contains("Submit").click({force:true})
      cy.wait(4000)
       
    })   
})

