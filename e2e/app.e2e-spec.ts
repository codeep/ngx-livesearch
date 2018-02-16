import { browser, element, by} from 'protractor';
import { LiveSearch } from './page-objects/livesearch.po';

describe('ngx-livesearch-project App', () => {
    let page: LiveSearch;
    let searchInput = element(by.css('.ngx-livesearch-input'));
    let searchText: string;

    beforeEach(() => {
        page = new LiveSearch();
        page.navigate();
        searchText = page.getRandomText();
    });

    it('should display results or empty message', () => {
        page.typeAndWait(searchText);
        page.getListItems().count().then(function(count) {
            if(!count) {
                expect(page.getEmptyMessageContainer().isPresent()).toBeTruthy();
            } else {
                expect(page.getFirtListItem()).toContain(searchText);
            }
        });
    })

    it('should display seeall link if enabled', () => {
        page.eneableSeeAll();
        page.typeAndWait(searchText);
        page.getListItems().count().then((count) => {
            count && expect(page.getSeeAll().isPresent()).toBeTruthy();
        });
    })

    it("should hide results when clicked outside and show on input focus", () => {
        page.typeAndWait('jo');
        page.getListItems().count().then(function(count){
            if(count) {
                browser.sleep(3000);
                element(by.css('body')).click();
                expect(page.getResultsList().isPresent()).toBeFalsy();
                browser.sleep(3000);
                page.getInput().click();
                expect(page.getResultsList().isPresent()).toBeTruthy();
                browser.sleep(3000);
            }
        })
    })

    it('should higlight typed text in results', () => {
        page.typeAndWait('jo');
        expect(page.getHilightedElements().get(0).getText()).toBe('jo');
        browser.sleep(3000);
    })

});
