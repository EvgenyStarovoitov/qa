// var webdriverio = require('webdriverio');
// var options = { desiredCapabilities: { browserName: 'chrome' } };
// var client = webdriverio.remote(options);

// client
//     .init()
//     .url('https://www.google.com/')
//     .setValue('#lst-ib', 'Banana Song intext:Despicable Me')
//     .click('.jsb center input')
//     .getText('a*=Despicable Me')
//     .getTitle().then(function(title) {
//         console.log('Title is: ' + title);

//         // outputs:
//         // "Title is: WebdriverIO (Software) at DuckDuckGo"
//     })
//     .end();