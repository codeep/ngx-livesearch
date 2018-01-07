import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LivesearchComponent } from './livesearch/livesearch.component';
import { RequestService } from './services/request.service';
import { HttpClientModule } from '@angular/common/http';
import { HighlightPipe } from './search-highlight.pipe';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { SearchResultSelectDirective } from './result-select.directive';

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
