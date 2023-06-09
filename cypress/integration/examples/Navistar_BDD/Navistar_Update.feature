Feature: Test Chick-fil-a application
    Scenario:Create "Vendor Item"
            Given User is on Login page
            When user Enter Username
            When user Enter Password
            When user click on Login button
            When after succesfull login user click on Quick Actions button
            When user click on "Search" button and User able to see the "Search Thing Domain" option
            When user click on "Search Thing Domain" button and User able to see the "Search Thing Domain" screen
            When user click on "Edit Filter" button and User able to see the selects "Entity Map" Options
            When user click on "Vendor Item" checkbox and User able to see the selected " Vendor Item Entity Map" Options
            When user click on "Apply" button and User able to see the selects "Vendor Item" screen
            When user click on "Search " box and Enter Vendor Item Number   
            When user click on "Checkbox " button and User able to see the selected "Vendor Iteam" 
            When user click on "Download " button and User able to see the Downloads options
            When user click on "Download in excel " button and User able to see the "Download Bulk Entities - 1 entities" screen 
            When user click on "Download All" button and User able to see the Download "Vendor Iteam" 
            When user click on "show task details" button and User able to see the "Entity Data Export" screen
            When user click on "Refresh" button and User able to see the  export data succesfull  
            When user click on "Download option" button and User able to see the Download "Vendor Iteam" Excel file 
            When user click on "HOME" button And User able to see the home page
            When user click on "Quick Actions" button
            When user click on "Upload entities" and User able to see the "Upload bulk entities" screen
            When user click on "Upload File" and selects the import Vendor Item file.
            When user click on "Show Task details" and user able to view the "Entity Data Imports Processing" screen
            When user click on "Refresh" button and Users until waiting for "Validation Status" not changing into the "Completed" status
            When user click on "Success" button and User able to view the "Entity Data Imports Completed" screen
            When user click on "Part Number" id and User able to view the "Vendor Item" screen  
            When user click on "Search" icon and Enter part number which are value provided in excel
            When user click on Summary tab
            When user click on Sumbit button in workflow section.      
