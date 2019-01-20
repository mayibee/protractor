"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
//var reporter = require('cucumber-html-reporter');
exports.config = {
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../Features/demo.feature'],
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    cucumberOpts: {
        // require step definitions
        tags: "@angularTesting",
        format: 'json:./cucumberreport.json',
        onComplete: () => {
            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberreport.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome  54.0.2840.98",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
            reporter.generate(options);
        },
        require: [
            './StepDefinations/*.js',
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQSxpRUFBbUQ7QUFDbkQsbURBQW1EO0FBRXhDLFFBQUEsTUFBTSxHQUFXO0lBQzFCLFNBQVMsRUFBQyxRQUFRO0lBQ2xCLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsS0FBSyxFQUFFLENBQUUsMEJBQTBCLENBQUU7SUFDckMsa0RBQWtEO0lBQ2xELGFBQWEsRUFBQyxJQUFJO0lBRWxCLFlBQVksRUFBRTtRQUNaLDJCQUEyQjtRQUMzQixJQUFJLEVBQUMsaUJBQWlCO1FBQ3RCLE1BQU0sRUFBQyw0QkFBNEI7UUFDbkMsVUFBVSxFQUFDLEdBQUUsRUFBRTtZQUNiLElBQUksT0FBTyxHQUFHO2dCQUNaLEtBQUssRUFBRSxXQUFXO2dCQUNsQixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxNQUFNLEVBQUUsd0JBQXdCO2dCQUNoQyxzQkFBc0IsRUFBRSxJQUFJO2dCQUM1QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFO29CQUNOLGFBQWEsRUFBQyxPQUFPO29CQUNyQixrQkFBa0IsRUFBRSxTQUFTO29CQUM3QixTQUFTLEVBQUUsc0JBQXNCO29CQUNqQyxVQUFVLEVBQUUsWUFBWTtvQkFDeEIsVUFBVSxFQUFFLFdBQVc7b0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2lCQUN2QjthQUNKLENBQUM7WUFDRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRzNCLENBQUM7UUFDRCxPQUFPLEVBQUU7WUFDUCx3QkFBd0I7U0FHekI7S0FDRjtDQUVGLENBQUMifQ==