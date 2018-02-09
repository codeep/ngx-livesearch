import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Directive({ selector: '[highlightResult]' })
export class SearchResultHighlightDirective implements OnInit {
    @Input() highlightResult;

    constructor(private elem: ElementRef,
                private renderer: Renderer2,
                private requestService: RequestService) {}  

    ngOnInit () {
       let element = this.elem.nativeElement;
       let searchText = this.requestService.searchValue;
       let highlightedText =  searchText ? this.highlightResult.replace(new RegExp(searchText, 'i'), `<span class="search-highlight">${searchText}</span>`) : searchText;
       this.renderer.setProperty(element, 'innerHTML', highlightedText);
    }

}