"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../pageObjects/calculator");
const chai_1 = __importDefault(require("chai"));
let calc = new calculator_1.calculator();
var expect = chai_1.default.expect;
cucumber_1.Given('I will navigate to calculator site', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
}));
cucumber_1.When('I add two members {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.secondEditBox.sendKeys(string);
    yield calc.firstEditBox.sendKeys(string2);
}));
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.go.click();
    let text = yield calc.getResult.getText();
    console.log(text);
    expect(text).to.equal(string);
}));
cucumber_1.Given('I will navigate to {string} Page', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get(string);
}));
cucumber_1.When('I clicked on header link', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.element(protractor_1.by.linkText("angular.io")).click();
}));
cucumber_1.Then('You will enter {string} in search box', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.element(protractor_1.by.css("input[type='search']")).sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUU3QywyQ0FBa0Q7QUFDbEQsMERBQXVEO0FBQ3ZELGdEQUF3QjtBQUV4QixJQUFJLElBQUksR0FBQyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUMxQixJQUFJLE1BQU0sR0FBQyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBSXZCLGdCQUFLLENBQUMsb0NBQW9DLEVBQUUsR0FBTyxFQUFFO0lBQ2pELG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxDQUFNLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUNwRSxvRUFBb0U7SUFFcEUsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTVDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFJTCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUM1RCxvRUFBb0U7SUFDcEUsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWxCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLGtDQUFrQyxFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDdEQsb0VBQW9FO0lBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywwQkFBMEIsRUFBRSxHQUFRLEVBQUU7SUFDekMsb0VBQW9FO0lBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQyx1Q0FBdUMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQzVELG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pFLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==