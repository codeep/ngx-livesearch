import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LivesearchComponent } from './livesearch/livesearch.component';
import { RequestService } from './services/request.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultSelectDirective } from './directives//result-select.directive';
import { RouterModule } from '@angular/router';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import { SearchResultHighlightDirective } from './directives/search-result-highlight.directive';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [LivesearchComponent, SearchResultSelectDirective, SearchResultHighlightDirective],
  exports: [LivesearchComponent, SearchResultHighlightDirective],
  providers: [RequestService]
})
export class NgxLivesearchModule { }
