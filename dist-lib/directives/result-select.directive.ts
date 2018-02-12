import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, Renderer2 } from '@angular/core';

@Directive({ selector: '[searchResultSelect]' })
export class SearchResultSelectDirective  {
    @Input() searchResultSelect;
    @Output() searchElementSelected = new EventEmitter();

    constructor(private elem: ElementRef, private renderer: Renderer2) {
        renderer.setAttribute(elem.nativeElement, 'tabindex', '-1');
    }


    @HostListener("keyup.enter")
    @HostListener("click") elementEntered() {
       this.searchElementSelected.emit(this.searchResultSelect);
    }

}