import { Component } from 'angular2/core';
import { WelcomeComponent } from './welcome.component';

@Component({
    selector: "my-app",
    templateUrl: '/app/app.template.html',
    directives: [WelcomeComponent]
})
export class AppComponent { }