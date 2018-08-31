import Page from './page';

export default class Search extends Page {
  getSearchInput () {
    return browser.element('//form[@class="*=main_search"]')
  }
  // getSearchInput () {
  //   return browser.element('#askAnaQueryInput')
  // }
  getLoginButton(){ 
    return browser.element('//button[contains(., "Search")]'); 
  }
}
