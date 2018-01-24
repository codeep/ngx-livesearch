import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxLivesearchModule } from './ngx-livesearch/ngx-livesearch.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SeeAllComponent } from './see-all.component';

const appRoutes: Routes = [
    { path: '', component: AppComponent, pathMatch: 'full'},
    { path: 'see-all', component: SeeAllComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    SeeAllComponent
  ],
  imports: [
    BrowserModule,
    NgxLivesearchModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
