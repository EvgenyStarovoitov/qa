// const {Builder, By} = require('selenium-webdriver');
// console.log(new Date());

// let driver = new Builder()
//     .forBrowser('chrome')
//     .build();

// let result = [];

// driver.get('https://www.onliner.by/');
// driver.findElement(By.className('fast-search__input')).sendKeys('Бонд');
// driver.findElements(By.className('search__result')).then(res => {
//   res.forEach(el => {
//     driver.findElement(By.className('news__link')).getAttribute('href').then(res => {
//       result.push(res)
//     })
//   })
// });

// console.log(result)
// driver.close();

// var fs = require('fs'),
//     request = require('request');

// var download = function(uri, filename, callback){
//   request.head(uri, function(err, res, body){
//     console.log('content-type:', res.headers['content-type']);
//     console.log('content-length:', res.headers['content-length']);

//     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
//   });
// };

// download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
//   console.log('done');
// });