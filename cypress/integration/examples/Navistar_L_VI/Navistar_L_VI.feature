Feature: Test Linking V_I application
    Scenario:Create "Linking_VI"
            Given user is on loGin page
            When user Enter USERname
            When user Enter PASSword
            When user click on LoGin Button
            When after succesfull login user click on "Quick Actions" button and upload first item file
            When user click on "upload entities" and User able to see the "upload bulk entities" screen
            When user click on "uploAD FilE" and selects the import Item file
            When user click on "show task Details" and user able to view the "eNtity datA import processinG" screen
            When user click on "ReFresH" button and Users until waiting for "validation status" not changing into the "Completed" status
            # When user click on "erroR" button and user able to see Error details page 
            When user click on "sUccess" button and User able to view the "entIty datA imporTs compLeted" screen
            When user click on "PaRt nUmber" id and User able to view the "iteM" screen
            When user click on "sEArch" icon and Enter part number which are value provided in excel
            When user click on "suMMary" tab
            When user click on "hOme" button and Upload second file Vendor item
            When user click on "qUIck acTion" button
            When user click on "UploaD enTities" and User able to see the "UPload buLk entITies" screen
            When user click on "UPLoad FiLe" and selects the import Vendor Item file
            When user click on "SHow TAsk deTAils" and user able to view the "entitY datA impOrts prOCessing" screen
            When user click on "reFREsh" button and Users until waiting for "vaLIdatIon stATUs" not changing into the "CoMPleted" status
            # When user click on "Error" button and user able to see error details page 
            When user click on "SUCCess" button and User able to view the "eNtiTy datA impoRts coMPleted" screen
            When user click on "pART numBER" id and User able to view the "ITEM" screen
            When user click on "SEARCh" icon and Enter part number which are value provided in excel
            When user click on "sumMARy" tab
            When user click on "ItEMs" button inside of relastionship widget
            When user click on "iTEm" part number 
            When user click on "AddComment" text field under "eCOmmerce Approval" Workflow
            When user click on "APPRove" button Workflow move can "VendorenrIchment" stage
            When user click on "HOme" button
            When user click on "VendorSubmission" task under "MyTo-Dos" widget
            When user click on "VendoR EnRIchment" task and user able to see "VENdor ItEm" screen
            When user click on "SeARch" tab and user search vendor item 
            When user click on "PartNo" number
            When user click on sumMaRy tab
            When user click on suMbit button in workflow section

            