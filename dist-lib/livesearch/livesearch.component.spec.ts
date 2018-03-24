import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LivesearchComponent } from './livesearch.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultSelectDirective } from '../directives/result-select.directive';
import { RouterModule } from '@angular/router';
import { RequestService } from '../services/request.service';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SearchResultHighlightDirective } from '../directives/search-result-highlight.directive';

describe('LivesearchComponent', () => {
    let component: LivesearchComponent;
    let fixture: ComponentFixture<LivesearchComponent>;
    let inputEl: DebugElement;
    let resultsEl: DebugElement;
    let requestService: RequestService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LivesearchComponent, SearchResultSelectDirective, SearchResultHighlightDirective],
            imports: [ReactiveFormsModule, RouterModule, HttpClientModule, BrowserAnimationsModule],
            providers: [RequestService]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LivesearchComponent);
        component = fixture.componentInstance;
        requestService = TestBed.get(RequestService);
        inputEl = fixture.debugElement.query(By.css('.ngx-livesearch-input'));
        resultsEl = fixture.debugElement.query(By.css('.livesearch-wrapper'));
        fixture.detectChanges();
    });

    fit('should show results if exists and show no result when not', () => {
        let randomIndex = Math.floor(Math.random() * 2);
        let searchTexts = ['ar', String(Math.random())];
        let searchText = searchTexts[randomIndex];
        let sourceArray = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan"];
        component.localSource = sourceArray;
        let matchingResults = sourceArray.filter((source) => source.indexOf(searchText) != -1);
        component.inputTextSubject.next(searchText);
        requestService.searchValue = searchText;
        fixture.detectChanges();
        let resultsEl = fixture.debugElement.query(By.css('.search-results'));
        if(matchingResults.length) {
            let firstResultElementText = resultsEl.nativeElement.children[0].textContent.trim();
            expect(firstResultElementText).toBe(matchingResults[0]);
        } else {
            let emptyMessageEl = fixture.debugElement.query(By.css('.no-result-message'));
            expect(emptyMessageEl).toBeTruthy();
        }
        
    })

    it('intrval must be number', () => {
        const interval = component.searchOptions.interval;
        expect(interval).toMatch(/^\d+$/);
    })

    it('limit must be number', () => {
        const limit = component.searchOptions.limit;
        expect(limit).toMatch(/^\d+$/);
    })
});
