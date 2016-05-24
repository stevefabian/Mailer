import { Component } from 'angular2/core';
import { HistoryComponent } from './history.component';
import { SearchComponent } from './search.component';
@Component({
    selector: "my-app",
    templateUrl: '/app/templates/app.template.html',
    directives: [HistoryComponent, SearchComponent]
})
export class AppComponent { }