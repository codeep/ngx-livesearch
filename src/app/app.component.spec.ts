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

    it('should create AppComponent', () => {
        expect(component).toBeTruthy();
    });

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
