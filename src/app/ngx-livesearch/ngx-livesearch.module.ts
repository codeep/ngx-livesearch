import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivesearchComponent } from './livesearch/livesearch.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LivesearchComponent],
  exports: [LivesearchComponent]
})
export class NgxLivesearchModule { }
