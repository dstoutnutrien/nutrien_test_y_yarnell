import { When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import checkboxesPage from "../pageobjects/checkboxes.page.js";

When(/^I select checkbox (\d)$/, async function (num) {
  this.checkbox = await checkboxesPage.elements.checkbox(num);
  await checkboxesPage.select(num);
});

Then(/^The checkbox should be checked$/, async function () {
  //(this.checkbox).waitForDisplayed({ timeout: 60 * 1000, interval: 2000 });
  await expect(this.checkbox).toHaveAttribute("checked");
  //const p = $("input[type='checkbox']") 
  //p.click()
  //verify if checked with assertion
  //expect(p).toBeSelected()
  //uncheck checkbox
  //p.click()
  //verify if not checked with assertion
  //expect(p).not.toBeSelected()
});
