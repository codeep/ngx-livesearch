import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivesearchComponent } from './livesearch.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightPipe } from '../pipes/search-highlight.pipe';
import { SearchResultSelectDirective } from '../directives/result-select.directive';
import { RouterModule } from '@angular/router';
import { RequestService } from '../services/request.service';
import { HttpClientModule } from '@angular/common/http';

describe('LivesearchComponent', () => {
    let component: LivesearchComponent;
    let fixture: ComponentFixture<LivesearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LivesearchComponent, HighlightPipe, SearchResultSelectDirective ],
            imports: [ReactiveFormsModule, RouterModule, HttpClientModule],
            providers: [RequestService]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LivesearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('intrval must be number', () => {
        const interval = component.searchOptions.interval;
        expect(interval).toMatch(/^\d+$/);
    })

    it('limit must be number', () => {
        const limit = component.searchOptions.limit;
        expect(limit).toMatch(/^\d+$/);
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
