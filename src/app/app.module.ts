import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxLivesearchModule } from './ngx-livesearch/ngx-livesearch.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxLivesearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
