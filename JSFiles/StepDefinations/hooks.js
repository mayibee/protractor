"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@calc" }, function () {
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.Before({ tags: "@angularTesting" }, function () {
    console.log("I need to execute first");
});
cucumber_1.After({ tags: "@calc" }, function () {
    console.log("Test is completed");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBdUM7QUFDdkMsMkNBQXFDO0FBRXJDLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFDdEIsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUMsRUFBRTtJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQyJ9