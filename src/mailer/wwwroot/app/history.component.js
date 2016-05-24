"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var message_service_1 = require('./message.service');
var http_1 = require('angular2/http');
var HistoryComponent = (function () {
    function HistoryComponent(_messageService) {
        this._messageService = _messageService;
        this.Items = [
            { Id: 1, Date: new Date('5/14/16'), Subject: "This is a test", GroupId: 1, Recipients: 2 },
            { Id: 1, Date: new Date('5/16/16'), Subject: "My First Message and it has a very long subject line", GroupId: 1, Recipients: 3 }
        ];
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.getMessages()
            .subscribe(function (res) { return _this.Items = res; }, function (error) { return console.error(error); });
    };
    HistoryComponent = __decorate([
        core_1.Component({
            selector: 'message-history',
            templateUrl: '/app/templates/history.template.html',
            providers: [message_service_1.MessageService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], HistoryComponent);
    return HistoryComponent;
}());
exports.HistoryComponent = HistoryComponent;
