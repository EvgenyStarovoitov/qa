import Search from '../PO/search_input';

let search  = new Search();

search.open('https://www.copaair.com/en/web/us');

describe('search form testing', () => {
  it('should return show an alert at wrong search input', ()=> {
    search.getSearchInput().$('div > input').setValue('babel');
    search.getloginButton().click();
  })
})

