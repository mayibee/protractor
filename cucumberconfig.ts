import {Config} from 'protractor';
import { format } from 'url';
import { JsonFormatter } from 'cucumber';
import * as reporter from 'cucumber-html-reporter';
//var reporter = require('cucumber-html-reporter');

export let config: Config = {
  framework:"custom",
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ '../Features/demo.feature' ],
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect:true,

  cucumberOpts: {
    // require step definitions
    tags:"@angularTesting",
    format:'json:./cucumberreport.json',
    onComplete:()=>{
      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberreport.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
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
      './StepDefinations/*.js', // accepts a glob
      
      
    ]
  }
  
};