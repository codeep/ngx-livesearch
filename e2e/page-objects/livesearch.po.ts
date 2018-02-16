import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class LiveSearch {
    navigate():promise.Promise<any> {
    	return browser.get('/');
    }

    getInput(): ElementFinder {
        return element(by.css('.ngx-livesearch-input'));
    }
    
    getEmptyMessageContainer(): ElementFinder {
        return element(by.css('.no-result-message'));
    }

    getReusltContainer() : ElementFinder {
        return element(by.css('.search-result'));
    }

    getResultsList(): ElementFinder {
        return element(by.css('.search-results'));
    }

    getListItems(): ElementArrayFinder {
        return this.getResultsList().all(by.tagName('li'));
    }

    getSeeAll(): ElementFinder {
        return element(by.css('.see-all-result-link'));
    }

    getFirtListItem() {
        return this.getResultsList().all(by.tagName('li')).get(0).getText();
    }

    eneableSeeAll() {
        element(by.css('#addSeeAllUrl')).click();
    }

    typeAndWait(text) {
        this.getInput().sendKeys(text);
        browser.waitForAngular();
    }

    getRandomText() {
        let texts = ['jo', String(Math.random())];
        let randomINdex = Math.floor(Math.random() * texts.length);
        return texts[randomINdex];
    }

    getHilightedElements(): ElementArrayFinder {
        return element.all(by.css('.search-highlight'));
    }
}