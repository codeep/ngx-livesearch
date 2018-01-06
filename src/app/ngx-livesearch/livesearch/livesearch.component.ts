import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { RequestService } from '../services/request.service';

@Component({
  selector: 'livesearch',
  templateUrl: './livesearch.component.html',
  styleUrls: ['./livesearch.component.css']
})
export class LivesearchComponent implements OnInit {

  @Input() searchUrl ?:string;
  @Input() queryName: string;

  searchResult;
  searchInput: FormControl = new FormControl('');
  constructor(private requestService: RequestService) { }

  ngOnInit() {
    console.log('searchUrl', this.searchUrl);
    this.requestService.searchUrl = this.searchUrl;
    this.requestService.queryUrl = this.queryName;
    this.init();
  }

  private init() {
    this.requestService.search(this.searchInput.valueChanges)
      .subscribe(results => {
          this.searchResult = results;
      })
  }

}
