class InputsPage {
  
  get elements() {
    let header2 = $('h3=Inputs');
    return {
      header: () => $("h3"),
     
    };  ``
  }

  get input() {
    const header = $('h3=Inputs');
    const input= header.$("input");
    return input;
      
 
      //input: () => $('h3=Inputs'),
     ``
  }

  async set(value) {
    //await (await this.elements.input()).setValue(value);
    browser.url("https://the-internet.herokuapp.com/inputs");
    const header = $('=Inputs');
    const val = $("//*[@type='number']");
    await val.setValue(value)
    //expect(val.isD);
  }
}

export default new InputsPage();
