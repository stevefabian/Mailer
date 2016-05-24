import { Component } from 'angular2/core';
import { Message } from './message.model';

@Component({
    selector: 'message-history',
    templateUrl: '/app/templates/history.template.html'
})
export class HistoryComponent {

    public Items: Message[] = [
        { Id: 1, Date: new Date('5/14/16'), Subject:"This is a test", GroupId: 1, Recipients:2 },
        { Id: 1, Date: new Date('5/16/16'), Subject:"My First Message and it has a very long subject line", GroupId: 1, Recipients:3 }
    ]
 
}