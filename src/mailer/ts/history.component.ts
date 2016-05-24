import { Component, OnInit } from 'angular2/core';
import { Message } from './message.model';
import { MessageService } from './message.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import { BetterDatePipe } from './date.pipe';
import { BetterTimePipe } from './time.pipe';

@Component({
    selector: 'message-history',
    templateUrl: '/app/templates/history.template.html',
    providers: [MessageService, HTTP_PROVIDERS],
    pipes: [BetterDatePipe, BetterTimePipe]
})
export class HistoryComponent implements OnInit {

    constructor(private _messageService: MessageService) { }

    ngOnInit() {

        this._messageService.getMessages()
            .subscribe(res => this.Items = res,
            error => console.error(error)
            );

    }

    public Items: Message[] = []
 
}