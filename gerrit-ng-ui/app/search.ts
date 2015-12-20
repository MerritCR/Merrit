/**
 * Created by josh on 12/12/15.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'search',
    template:`
        <input type="text">
        <button (click)="onClickSubmit()" aria-label="Search"></button>
    `,
    directives:[]
})

export class Search {
    //public searchText: search;
    public onClickSubmit(){
        alert('add connection to search api')
    }
}