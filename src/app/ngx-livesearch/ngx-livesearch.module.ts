import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LivesearchComponent } from './livesearch/livesearch.component';
import { RequestService } from './services/request.service';
import { HttpClientModule } from '@angular/common/http';
import { HighlightPipe } from './pipes/search-highlight.pipe';
import { SearchResultSelectDirective } from './directives//result-select.directive';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [LivesearchComponent, HighlightPipe, SearchResultSelectDirective],
  exports: [LivesearchComponent],
  providers: [RequestService]
})
export class NgxLivesearchModule { }
