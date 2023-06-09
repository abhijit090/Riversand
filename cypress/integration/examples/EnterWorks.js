/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe';
import 'cypress-xpath';
// import cy from 'cypress';

describe('Enterworkese', ()=> {
    const getIframeDocument = () => {
        return cy
        .get('[id="tabTaxonomy"] iframe')
        .its('0.contentDocument').should('exist')
      }
      
      const getIframeBody = () => {
        return getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
      }
      

    it('Enterwork', ()=> {

        cy.visit("http://67.22.105.214:8090/webcm/login.do;jsessionid=EF7970A56F17FF51234A4FF05CB50D9F")
        cy.get('#username').type('Ajadhav')
        cy.get('#password').type('Ajadhav')
        cy.get('#login').click()
        cy.wait(2000)
        cy.get("div[role='button'] span[class='ui-icon ui-icon-triangle-1-e']").click()
        cy.wait(2000)
        cy.get(':nth-child(9) > .ui-icon').click()
        // cy.get("#Profiles").click()
        cy.get("#Taxonomy").click()
       cy.wait(4000)
       cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[href='#action-menu']").click()
        cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')     
        .find("[href='#new-action']").click()
        cy.wait(2000)
      

    const randomnumber2 = Math.floor(Math.random()*(9))
       globalThis.randomnumber2 = randomnumber2
       let random_string = Math.random().toString(36).substring(2,3)
       globalThis.random_string = random_string
    //    // Select Name
    //    cy.new_nest_frame("div[id='tabProfiles'] iframe", "[id='profileEditor-modalIFrameDialog'] iframe", "[id='name']", "testname1"+random_string, "type")
    //     //input description field
    //     cy.new_nest_frame("div[id='tabProfiles'] iframe", "[id='profileEditor-modalIFrameDialog'] iframe", "[id='description']", "Test_Data", "type")
    //     //select type
    
    //     cy.get("div[id='tabProfiles'] iframe").its('0.contentDocument').should('exist').its('body')
    //     .find("[id='profileEditor-modalIFrameDialog'] iframe").its('0.contentDocument').should('exist').its('body')
    //     .find("[name='formatTypeCode']").select('EPIM')
  
    // //    select pathcode
    // cy.get("div[id='tabProfiles'] iframe").its('0.contentDocument').should('exist').its('body')
    // .find("[id='profileEditor-modalIFrameDialog'] iframe").its('0.contentDocument').should('exist').its('body')
    // .find("[name='isComplete']").select('True')

    // //select next button
    // cy.new_nest_frame("div[id='tabProfiles'] iframe", "[id='profileEditor-modalIFrameDialog'] iframe", "[name='nextButton']", "", "click")

      // Taxomony Name
      cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[name='name']", "TaxonoyTest"+random_string, "type")
      //Select folder
      cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')
       .find("[id='codeset-editor'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[name='codeSetTypeId']").select('Services Taxonomy - Hierarchy')

      // Taxonoy description
     cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[name='description']", "Test_Data_Taxonoy", "type")

     // properties repository
     cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')
     .find("[id='codeset-editor'] iframe").its('0.contentDocument').should('exist').its('body')
    .find("[name='csMetadataRepoId']").select('CM_ItemStaging_Taxonomy_Metadata')

    //Include owner
    cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[id='ownerUseInd0']", "", "click")
    //Path code 
    cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[id='pathCode0']", "", "click")

    //Select Source
    cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[id='codeSetSource0']", "", "click")

   //select next button
    cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[id='nextBtn']", "", "click")
      cy.wait(4000)
    //Click on ADD button in Editor
    cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[name='AddButton']", "", "click")

    // Level Name
   cy.wait(4000)
    cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[id='codeset-editor'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[type='text'][size='30']").type("TestLeve5")
    
    //click on next button
    cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[name='Next']", "", "click")
      cy.wait(4000)

      //click on add button in  Detaileditor
      // cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[name='Add']", "", "click")
      cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[id='codeset-editor'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[name='Add']").click()
        cy.wait(4000)

      //Detaileditor
      //cy.visit('http://67.22.105.214:8090/webcm/CodeSetEditorMain.do?invokedFrom=CodeSetTypeListing&codeSetTypeId=1&hierarchyInd=3&codeSetId=&invokedDialog=codeset-editor&tStamp=1684993673158')
      cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen')
      })
  
      cy.get('http://67.22.105.214:8090/webcm/CodeDetail.do?epimAction=Start').click()
      cy.get('@windowOpen').should('be.calledWith', 'page1.html')
       cy.get("[id='content']").find("[type='text'][size='30']").type("Test_Dell")


        // cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')
        // .find("[id='codeset-editor'] iframe").its('0.contentDocument').should('exist').its('body')
        // .find("[type='text'][size='30']").type("Test_Dell")
  
        






      cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[id='codeset-editor'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[type='text'][size='30']").type("Test_Dell")


        cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[name='description']", "Dell_Desc", "type")

        cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[id='codeset-editor'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[id='isActive']").select("Active")

        cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[type='radio'][value='0']", "", "click")

        
        cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[type='submit'][value='Save']", "", "click")


    })
})