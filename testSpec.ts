import { browser,element,by } from "protractor";
import { async } from "q";
import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";
import { calculator } from "./pageObjects/calculator";


describe('Chain Locators',function(){

    xit('Open AngularJS WebSite',function(){

        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
            console.log(text);
        })

    })

    xit('Open AngularJS WebSite',async()=>{

        await browser.get("http://juliemr.github.io/protractor-demo/");
        await element(by.model("first")).sendKeys("3");
        await element(by.model("second")).sendKeys("15");
        await element(by.id("gobutton")).click();
        let text=await element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
        console.log(text);

    })

    xit("Angular home page title validation",async()=>{
        await browser.get("https://angularjs.org/");
        await element(by.linkText("angular.io")).click();
        await element(by.css("input[type='search']")).sendKeys("hello");
    })

    it("Angular home page title validation",async()=>{
        let calc = new calculator();
        await browser.get("http://juliemr.github.io/protractor-demo/");
        await calc.secondEditBox.sendKeys("4");
        await calc.firstEditBox.sendKeys("6");
        await calc.go.click();
        let text = await calc.getResult.getText();
        console.log(text);

    

    })







})