import { Component } from 'angular2/core';

@Component({
    selector: 'welcome',
    templateUrl: '/app/welcome/welcome.template.html'
})
export class WelcomeComponent {

    public welcomeMessage: string = "about this application";

}