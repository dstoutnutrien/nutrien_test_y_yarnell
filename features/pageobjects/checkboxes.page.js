class CheckboxesPage {
  get elements() {
    return {
      header: () => $("h3"),
      //checkbox: (num) => $(`input:nth-child(${num})`),
      checkbox: (num) => $("input[type='checkbox']"),
      
   
    };
  }

  async select(num) {
    const checkbox = await this.elements.checkbox(num);
    await checkbox.click();
    await browser.pause(800);
  }
}

export default new CheckboxesPage();
