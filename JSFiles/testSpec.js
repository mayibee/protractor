"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./pageObjects/calculator");
describe('Chain Locators', function () {
    xit('Open AngularJS WebSite', function () {
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        protractor_1.element(protractor_1.by.model("first")).sendKeys("3");
        protractor_1.element(protractor_1.by.model("second")).sendKeys("5");
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log(text);
        });
    });
    xit('Open AngularJS WebSite', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        yield protractor_1.element(protractor_1.by.model("first")).sendKeys("3");
        yield protractor_1.element(protractor_1.by.model("second")).sendKeys("15");
        yield protractor_1.element(protractor_1.by.id("gobutton")).click();
        let text = yield protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)")).getText();
        console.log(text);
    }));
    xit("Angular home page title validation", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angularjs.org/");
        yield protractor_1.element(protractor_1.by.linkText("angular.io")).click();
        yield protractor_1.element(protractor_1.by.css("input[type='search']")).sendKeys("hello");
    }));
    it("Angular home page title validation", () => __awaiter(this, void 0, void 0, function* () {
        let calc = new calculator_1.calculator();
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        yield calc.secondEditBox.sendKeys("4");
        yield calc.firstEditBox.sendKeys("6");
        yield calc.go.click();
        let text = yield calc.getResult.getText();
        console.log(text);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0U3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWdEO0FBR2hELHlEQUFzRDtBQUd0RCxRQUFRLENBQUMsZ0JBQWdCLEVBQUM7SUFFdEIsR0FBRyxDQUFDLHdCQUF3QixFQUFDO1FBRXpCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDekQsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQ3BHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyx3QkFBd0IsRUFBQyxHQUFPLEVBQUU7UUFFbEMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekMsSUFBSSxJQUFJLEdBQUMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXRCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsb0NBQW9DLEVBQUMsR0FBTyxFQUFFO1FBQzlDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM1QyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBQyxHQUFPLEVBQUU7UUFDN0MsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDNUIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFJdEIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQVFOLENBQUMsQ0FBQyxDQUFBIn0=