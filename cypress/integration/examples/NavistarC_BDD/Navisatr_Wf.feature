Feature: Test Chick-fil-a application
    Scenario:Create "Vendor Item"
            Given User is on login page
            When user Enter username
            When user Enter passWord
            When user click on logiN button
            When after succesfull login user click on quicK actions button
            When user click on "upload entities" and User able to see the "upload bulk entities" screen
            When user click on "upload File" and selects the import Vendor Item file
            When user click on "show Task details" and user able to view the "entity data imports processing" screen
            When user click on "refresh" button and Users until waiting for "validation status" not changing into the "completed" status
            When user click on "success" button and User able to view the "entity data imports completed" screen
            When user click on "Part Number" id and User able to view the "Vendor Item" screen
            When user click on "search" icon and Enter part number which are value provided in excel
            When user click on summari tab
            When user click on sumbit button in workflow section

            