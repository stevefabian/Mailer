import { Injectable } from 'angular2/core'; 
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Message } from './message.model';

@Injectable()
export class MessageService {

    constructor(private _http: Http) { }

    private _messageServiceUrl: string = '/api/emails';

    getMessages(): Observable<Message[]> {

        let data: Observable<Message[]> = this._http.get(this._messageServiceUrl)
            .map(res => <Message[]>res.json());

        return data;

    }

}