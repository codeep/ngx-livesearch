import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { RequestService } from '../services/request.service';

@Component({
  selector: 'livesearch',
  templateUrl: './livesearch.component.html',
  styleUrls: ['./livesearch.component.css']
})
export class LivesearchComponent implements OnInit {

    @Input() searchUrl ?:string;
    @Input() searchParam: string;
    @Output() onSelect = new EventEmitter();

    searchResult;
    searchInput: FormControl = new FormControl('');
    constructor(private requestService: RequestService) { }

    ngOnInit() {
    console.log('searchUrl', this.searchUrl);
    this.init();
    }

    private init() {
    this.configureSearchService();
    this.requestService.search(this.searchInput.valueChanges)
        .subscribe(results => {
            this.searchResult = results;
        })
    }

    public keyPressedOnSearchInput (keycode) {
    if(keycode != 40 || !this.searchResult.length) return
    let firstSearchItem = document.querySelector('.firstSearchResult') as HTMLBaseElement;
    firstSearchItem.focus();
    }

    public keyPressedOnSearchResult (event: KeyboardEvent) {
    let keycode = event.keyCode;
    if([38, 40].indexOf(keycode) == -1) return
    let target = event.currentTarget as HTMLBaseElement;
    let next = (keycode == 38 ? target.previousElementSibling : target.nextElementSibling) as HTMLBaseElement;
    if(next && next.tagName == 'LI') {
        next.focus();
    }
    }

    public configureSearchService () {
    this.requestService.searchUrl = this.searchUrl;
    this.requestService.searchParam = this.searchParam;
    }  

    public searchResultSelected(selectedItem) {
        this.onSelect.emit(selectedItem);
    }
}
