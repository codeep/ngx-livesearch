import { Component, ViewChild } from '@angular/core';
import { LivesearchComponent } from './ngx-livesearch/livesearch/livesearch.component';

@Component({
  selector: 'livesearch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild(LivesearchComponent) liveSearchComponentInstance;
    title = 'livesearch';
    public searchUrl = "https://testing-backend.herokuapp.com";
    public names: Array<String> = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah"];
    public searchOptions = {
        searchParam: 'name',
        seeAllUrl: 'see-all',
        seeAllParams: {
            role: "admin"
        },
        interval: 300
    }

    public searchTextOptions = {
        seeAll: 'See all',
        noResults: 'No results found',
        placeholder: 'Enter name'
    };

    public itemSlected(item) {
        console.log(item);
    }
}
