/**
 * Created by josh on 12/12/15.
 */
import {bootstrap, Component} from 'angular2/angular2';


@Component({
    selector: 'search',
    template:`
        <input type="text">
        <button (click)="onClickSubmit()" aria-label="Search"></button>
    `,
    directives:[]
})

class SearchComponent {
    public searchText: search;
    public onClickSubmit(){
        alert('add connection to search api')
    }
}

bootstrap(SearchComponent);