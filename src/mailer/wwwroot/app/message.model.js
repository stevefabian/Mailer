"use strict";
var Message = (function () {
    function Message() {
        this.Id = -1;
        this.Sent = false;
        this.Subject = "";
        this.Body = "";
        this.DateSent = new Date();
        this.History = [];
    }
    return Message;
}());
exports.Message = Message;
