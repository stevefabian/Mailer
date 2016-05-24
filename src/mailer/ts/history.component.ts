import { Component, OnInit } from 'angular2/core';
import { Message } from './message.model';
import { MessageService } from './message.service';
import { HTTP_PROVIDERS } from 'angular2/http';

@Component({
    selector: 'message-history',
    templateUrl: '/app/templates/history.template.html',
    providers: [MessageService, HTTP_PROVIDERS]
})
export class HistoryComponent implements OnInit {

    constructor(private _messageService: MessageService) { }

    ngOnInit() {

        this._messageService.getMessages()
            .subscribe(res => this.Items = res,
            error => console.error(error)
            );

    }

    public Items: Message[] = [
        { Id: 1, Date: new Date('5/14/16'), Subject:"This is a test", GroupId: 1, Recipients:2 },
        { Id: 1, Date: new Date('5/16/16'), Subject:"My First Message and it has a very long subject line", GroupId: 1, Recipients:3 }
    ]
 
}