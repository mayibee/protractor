Feature: I am going to validate my website functionalities

@calc
Scenario: Calculator Add Fucntionality Testing
Given I will navigate to calculator site
When I add two members "3" and "5"
Then the output displayed should be "8"

@calc
Scenario: Calculator Add Fucntionality Testing
Given I will navigate to calculator site
When I add two members "2" and "7"
Then the output displayed should be "9"

@calc
Scenario: Angular Website Functionality Testing
Given I will navigate to "https://angularjs.org/" Page
When I clicked on header link
#And You will navigate to angular page
Then You will enter "hello" in search box

@angularTesting
Scenario Outline: Angular Website Functionality Testing
Given I will navigate to "https://angularjs.org/" Page
When I clicked on header link
#And You will navigate to angular page
Then You will enter "<key>" in search box

Examples:
| key | 
| hello |
| hey   |
| mike  |

