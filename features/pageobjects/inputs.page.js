
class InputsPage {
  
  get elements() {
    return {
      header: () => $("h3"),
     
    };  ``
  }

  async set(value) {
  
    browser.url("https://the-internet.herokuapp.com/inputs");
    //const header = $('=Inputs');
    const input = $("//*[@type='number']");
    await input.setValue(value);
  }
}

export default new InputsPage();
