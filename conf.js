var  testiniumKey= 'TESTINIUMKEY';
var testiniumUser= 'TESTINIUMUSER';

exports.config = {
  seleniumAddress: 'http://hub.testinium.io/wd/hub',
  multiCapabilities: [

    {
      'browserName': 'firefox',
      'platform': 'WIN8_1',
      'version': '46',
      'recordsVideo':true,
      'takesScreenshot':true,
      'screenResolution':'XGA',
      'key':testiniumUser+':'+testiniumKey,

    }
    ],
    specs: ['protractor-test.js']
};