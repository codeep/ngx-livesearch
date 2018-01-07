import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({ selector: '[searchResultSelect]' })
export class SearchResultSelectDirective {
    @Input() searchResultSelect;
    @Output() searchElementSelected = new EventEmitter();
    constructor(elem: ElementRef) {
      
    }

    @HostListener("keyup.enter")
    @HostListener("click") elementEntered() {
       this.searchElementSelected.emit(this.searchResultSelect);
    }

}