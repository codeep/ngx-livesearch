import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'livesearch',
  templateUrl: './livesearch.component.html',
  styleUrls: ['./livesearch.component.css']
})
export class LivesearchComponent implements OnInit {

  @Input() searchUrl ?:string;

  constructor() { }

  ngOnInit() {
    console.log('searchUrl', this.searchUrl);
  }

}
