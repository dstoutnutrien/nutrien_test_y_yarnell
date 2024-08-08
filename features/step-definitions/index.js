import { Given, When, Then } from "@wdio/cucumber-framework";
import Page from "../pageobjects/page.js";
const index = new Page();

Given(/^I am on the (.+) page$/, async (page) => {
  await index.open(page);
});

Given("I am at the index page", async function () {
  await index.open();
});

When(/^I click the (.+) link$/, async function (page) {
  this.page = page;
  await index.click(page);
  
});

Then("I should be driected to the selected page", async function () {
  const html = await $("*").getHTML();
  console.log(html);
  //const link = await $('=inputs')
 
  //await index.click(link);
  //await index.click(link.waitForVisible(3000));
  const header = await $("h3");

 // expect(html).toMatch(new RegExp(`/h3.+${this.page}.+h3/`, "gm"));

  //const header = await $("h3");
  expect(header).toHaveText(this.page);
});
