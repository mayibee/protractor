
import {After, Before} from 'cucumber';
import { browser } from 'protractor';

Before({tags: "@calc"}, function () {
  browser.manage().window().maximize();
});

Before({tags: "@angularTesting"}, function () {
  console.log("I need to execute first");
});

After({tags: "@calc"}, function () {
    console.log("Test is completed");
  });
