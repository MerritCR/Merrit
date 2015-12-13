/**
 * Created by josh on 12/12/15.
 */
import {bootstrap, Component} from 'angular2/angular2';


@Component({
    selector: 'my-app',
    template:`
        <input type="text">
        <button aria-label="Search"></button>
    `,
    directives:[]
})

class AppComponent {
    public searchText: search;
}

bootstrap(AppComponent);