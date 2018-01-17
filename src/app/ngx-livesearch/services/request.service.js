"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
    }
    RequestService.prototype.search = function (inputObservable) {
        var _this = this;
        return inputObservable.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (query) { return _this.searchRequest(query); });
    };
    RequestService.prototype.searchRequest = function (query) {
        if (!query)
            return Rx_1.Observable.of([]);
        var searchParam = this.searchParam;
        var body = {};
        body[searchParam] = query;
        return this.http.post(this.searchUrl, body);
    };
    RequestService = __decorate([
        core_1.Injectable()
    ], RequestService);
    return RequestService;
}());
exports.RequestService = RequestService;
