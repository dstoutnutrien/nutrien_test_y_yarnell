# The internet is broken

We're trying to test https://the-internet.herokuapp.com/ but, it's going horribly. Goodness gracious, barely any tests are green. Please help us by doing the following:

1. Fork this repo.
2. Fix as much as you can.
3. Make any changes you feel would make this better.
4. Make a PR.

## Node JS

The recommended node version is v18.20.2
We recommend using nvm to install and manage node versions. It can be found at https://github.com/nvm-sh/nvm.

## Running Tests
install node manager:   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
install node 18:   nvm install 18
run npm install
install chrome driver service: npm install wdio-chromedriver-service --save-dev
install safari driver service: npm install --save-dev safaridriver



Run tests with `npm run wdio` or `npm run wdio-headless`

Run specific tests with `npm run wdio -- --cucumberOpts.tagExpression="@TAG"`
  "setup:testrunner": "wdio run ./wdio.conf.js --spec ./setup/testrunner.js",  npm run --spec index.js

 npm run wdio  // will run the tests. 
 allure serve  //will generate an allure report. 

#### You are our only hope.
