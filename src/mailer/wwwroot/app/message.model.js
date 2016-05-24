"use strict";
var Message = (function () {
    function Message() {
        this.Id = -1;
        this.Date = new Date();
        this.Subject = "";
        this.GroupId = -1;
        this.Recipients = -1;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.model.js.map