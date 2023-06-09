Feature: Test Chick-fil-a application
    Scenario:Create "Vendor Item"
            Given User is on Login page
            When user Enter Username
            When user Enter Password
            When user click on Login button
            When after succesfull login user click on Quick Actions button
            When user click on "Upload entities" and User able to see the "Upload bulk entities" screen
            When user click on "Upload File" and selects the import Vendor Item file.
            When user click on "Show Task details" and user able to view the "Entity Data Imports Processing" screen
            When user click on "Refresh" button and Users until waiting for "Validation Status" not changing into the "Completed" status
            When user click on "Success" button and User able to view the "Entity Data Imports Completed" screen
            When user click on "Part Number" id and User able to view the "Vendor Item" screen
            When user click on "Search" icon and Enter part number which are value provided in excel
            When user click on Summary tab
            When user click on Sumbit button in workflow section.

            