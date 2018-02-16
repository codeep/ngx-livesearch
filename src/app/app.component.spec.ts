import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LivesearchComponent } from './ngx-livesearch/livesearch/livesearch.component';
import { NgxLivesearchModule } from './ngx-livesearch/ngx-livesearch.module';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let liveSearchInstance: LivesearchComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AppComponent ],
            imports: [NgxLivesearchModule]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        liveSearchInstance  = component.liveSearchComponentInstance;
        fixture.detectChanges();
    });

    it('shuld be valid  url if exists', () => {
        const url = liveSearchInstance.searchUrl;
        url && expect(url).toMatch(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
    })

    it('LiveSearch component interval must be passed interval', () => {
        const interval = liveSearchInstance.searchOptions.interval;
        const passesInterval = component.searchOptions.interval;
        passesInterval && (expect(interval).toBe(passesInterval));
    });

    it('LiveSearch component limit must be passed limit', () => {
        const limit = liveSearchInstance.searchOptions.limit;
        const passedLimit = component.searchOptions['limit'];
        passedLimit && expect(limit).toBe(passedLimit);
    });
});
