import { Given, When, Then } from "cucumber";
import { async } from "q";
import { element, by, browser } from "protractor";
import { calculator } from "../pageObjects/calculator";
import chai from "chai";

let calc=new calculator();
var expect=chai.expect;



Given('I will navigate to calculator site', async()=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.get("http://juliemr.github.io/protractor-demo/");
});


When('I add two members {string} and {string}', async(string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
    
    await calc.secondEditBox.sendKeys(string);
    await calc.firstEditBox.sendKeys(string2);

  });
 
  

Then('the output displayed should be {string}', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    await calc.go.click();
    let text = await calc.getResult.getText();
    console.log(text);
    
    expect(text).to.equal(string);
});

Given('I will navigate to {string} Page', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.get(string);
  });

  When('I clicked on header link', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    await element(by.linkText("angular.io")).click();
  });



  Then('You will enter {string} in search box', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    await element(by.css("input[type='search']")).sendKeys(string);
  });








