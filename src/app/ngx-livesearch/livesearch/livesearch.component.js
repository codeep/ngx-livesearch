"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LivesearchComponent = /** @class */ (function () {
    function LivesearchComponent(requestService) {
        this.requestService = requestService;
        this.searchInput = new forms_1.FormControl('');
    }
    LivesearchComponent.prototype.ngOnInit = function () {
        console.log('searchUrl', this.searchUrl);
        this.init();
    };
    LivesearchComponent.prototype.init = function () {
        var _this = this;
        this.configureSearchService();
        this.requestService.search(this.searchInput.valueChanges)
            .subscribe(function (results) {
            _this.searchResult = results;
        });
    };
    LivesearchComponent.prototype.keyPressedOnSearchInput = function (keycode) {
        if (keycode != 40 || !this.searchResult.length)
            return;
        var firstSearchItem = document.querySelector('.firstSearchResult');
        firstSearchItem.focus();
    };
    LivesearchComponent.prototype.keyPressedOnSearchResult = function (event) {
        var keycode = event.keyCode;
        if ([38, 40].indexOf(keycode) == -1)
            return;
        var target = event.currentTarget;
        var next = (keycode == 38 ? target.previousElementSibling : target.nextElementSibling);
        if (next && next.tagName == 'LI') {
            next.focus();
        }
    };
    LivesearchComponent.prototype.configureSearchService = function () {
        this.requestService.searchUrl = this.searchUrl;
        this.requestService.searchParam = this.searchParam;
    };
    LivesearchComponent.prototype.searchResultSelected = function (selectedItem) {
        console.log(selectedItem);
    };
    __decorate([
        core_1.Input()
    ], LivesearchComponent.prototype, "searchUrl");
    __decorate([
        core_1.Input()
    ], LivesearchComponent.prototype, "searchParam");
    LivesearchComponent = __decorate([
        core_1.Component({
            selector: 'livesearch',
            templateUrl: './livesearch.component.html',
            styleUrls: ['./livesearch.component.css']
        })
    ], LivesearchComponent);
    return LivesearchComponent;
}());
exports.LivesearchComponent = LivesearchComponent;
