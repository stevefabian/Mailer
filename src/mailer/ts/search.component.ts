import { Component } from 'angular2/core';

@Component({
    selector: 'my-search',
    templateUrl: '/app/templates/search.template.html'
})
export class SearchComponent {
    public searchText: string = "";

    doSearch() {
        alert("Searching for " + this.searchText + " ...");
    }
}